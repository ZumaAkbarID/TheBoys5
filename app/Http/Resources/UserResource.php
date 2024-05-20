<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'username' => $this->username,
            'email' => $this->email,
            'email_verified_at' => $this->email_verified_at,
            'password' => $this->password,
            'avatar' => $this->avatar,
            'nim' => $this->nim,
            'address' => $this->address,
            'rememberToken' => $this->rememberToken,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            // 'date'=> (new Carbon($this->due_date))->format('Y-m-d')
          
        ];
    }
}
