<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function register(RegisterRequest $request)
    {
        $data = $request->validated();

        $user= User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
        ]);

        $token = $user->createToken('main')->plainTextToken;
        return response([
            'user' => $user,
            'token' => $token
        ]);
    }

    public function login(LoginRequest $request)
    {
        $credentials = $request->validated();
        $remember = $credentials['remember'] ?? false;
        unset($credentials['remember']);

        if (!auth()->attempt($credentials, $remember)) {
            return response([
                'error' => 'The provided credentials are incorrect.'
            ], 422);
        };

        $token = auth()->user()->createToken('main')->plainTextToken;
        return response([
            'user' => auth()->user(),
            'token' => $token   
        ]);
    }

    public function logout(Request $request)
    {

        $request->user()->currentAccessToken()->delete();
    
        return response([
            'success' => true
        ]);
    }
    
}
