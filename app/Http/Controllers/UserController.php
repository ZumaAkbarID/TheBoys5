<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserUpdateRequest;
use App\Http\Resources\GalonResource;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
{
        $user = User::find($id);
        
        return response()->json(
            [
                'user' => $user,
                'galon' => new GalonResource($user->galon)
            ]
        );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UserUpdateRequest $request, string $id)
    {
        $data = $request->validated();

        if($data) {
            $user = User::find($id);
    
            $userUpdate = $user->update([
                'fullName' => $data['fullName'],
                'nim' => $data['nim'],
                'address' => $data['address'],
                'number' => $data['number'],
                // 'password' => Hash::make($data['password']),
            ]);
    
            return response()->json(
                [
                    'user' => $userUpdate,
                ]
            );
            
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
