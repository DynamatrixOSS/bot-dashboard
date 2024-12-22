<?php

namespace App\Http\Controllers;

use App\Models\User;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class authController extends Controller
{
    function authenticate(Request $request) {
        $exchange_code = $request->code;

        $client_id = env('DISCORD_CLIENT_ID');
        $client_secret = env('DISCORD_CLIENT_SECRET');
        $redirect_uri = env('DISCORD_REDIRECT_URI');
        $api_endpoint = env('DISCORD_API_ENDPOINT');

        $client = new Client(['headers' => ['Content-Type' => 'application/x-www-form-urlencoded']]);

        $response = $client->post($api_endpoint . '/oauth2/token', [
            'form_params' => [
                'client_id' => $client_id,
                'client_secret' => $client_secret,
                'grant_type' => 'authorization_code',
                'code' => $exchange_code,
                'redirect_uri' => $redirect_uri,
            ]
        ]);

        $data = json_decode($response->getBody()->getContents(), true);

        $client = new Client();

        $response = $client->get($api_endpoint . '/users/@me', [
            'headers' => [
                'Authorization' => 'Bearer ' . $data['access_token'],
            ]
        ]);

        $userdata = json_decode($response->getBody()->getContents(), true);

        $isUser = User::where('user_id', $userdata['id'])->first();

        if (!$isUser) {
            $user = new User();

            $user->user_id = $userdata['id'];
            $user->name = $userdata['username'];
            $user->email = $userdata['email'];
            $user->profile_image = 'https://cdn.discordapp.com/avatars/' . $userdata['id'] . '/' . $userdata['avatar'] . '.png';
            $user->setRememberToken($token = Str::random(60));
            $user->save();
        } else {
            $user = $isUser;
        }

        Auth::loginUsingId($user->id, true);

        return response()->json([
            'status' => 200,
            'message' => 'User authenticated successfully',
            'user' => $user,
        ]);
    }
}
