<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\Galon;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(RegisterRequest $request)
    {
        $data = $request->validated();

        try {
            $user = User::create([
                'username' => $data['username'],
                'email' => $data['email'],
                'number' => $data['number'],
                'password' => Hash::make($data['password']),
            ]);

            $galon = Galon::create([
                'user_id' => $user->id,
            ]);

            $token = $user->createToken('main')->plainTextToken;

            return response()->json(
                [
                    'user' => $user,
                    'token' => $token,
                    'galon' => $galon
                ]
            );
        } catch (\Exception $e) {
            return response()->json(
                [
                    'error' => 'Something wrong.'
                ],
                500
            );
        }
    }

    public function login(LoginRequest $request)
    {
        $credentials = $request->validated();
        $remember = $credentials['remember'] ?? false;
        unset($credentials['remember']);

        if (!Auth::attempt($credentials, $remember)) {
            return response()->json(
                [
                    'error' => 'The provided credentials are incorrect.'
                ],
                422
            );
        };

        $token = Auth::user()->createToken('main')->plainTextToken;
        return response()->json(
            [
                'user' => auth()->user(),
                'token' => $token
            ]
        );
    }

    public function logout(Request $request)
    {
        Auth::user()->currentAccessToken()->delete();

        return response()->json([
            'success' => true
        ]);
    }
}
