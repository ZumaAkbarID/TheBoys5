<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(RegisterRequest $request)
    {
        $data = $request->validated();
        // dd($data);

        $user = User::create([
            'username' => $data['username'],
            'email' => $data['email'],
            'number' => $data['number'],
            'password' => Hash::make($data['password']),
        ]);

        $token = $user->createToken('main')->plainTextToken;
        return response()->json(
            [
                'user' => $user,
                'token' => $token
            ]
        );
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

        return response([
            'success' => true
        ]);
    }
}
