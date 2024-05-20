<?php

namespace Database\Seeders;

use App\Models\Config;
use App\Models\Galon;
use App\Models\Information;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Nette\Utils\Random;
use Spatie\Permission\Models\Role;
use Spatie\Permission\PermissionRegistrar;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Reset cached roles and permissions
        app()[PermissionRegistrar::class]->forgetCachedPermissions();

        Role::create(['name' => 'Developer', 'guard_name' => 'developer']);
        Role::create(['name' => 'Secretary', 'guard_name' => 'secretary']);
        Role::create(['name' => 'Member', 'guard_name' => 'member']);

        Config::create([
            'key' => 'kas_default',
            'value' => '125000'
        ]);

        Information::create([
            'category' => 'wifi',
            'key' => 'ssid',
            'value' => 'THE BOYS'
        ]);

        Information::create([
            'category' => 'wifi',
            'key' => 'password',
            'value' => '1sampai10'
        ]);

        Information::create([
            'category' => 'wifi',
            'key' => 'ID Pel',
            'value' => '12615566'
        ]);

        Information::create([
            'category' => 'other',
            'key' => 'PDAM',
            'value' => '1300038'
        ]);

        Information::create([
            'category' => 'other',
            'key' => 'PLN',
            'value' => '86030966864'
        ]);

        User::create([
            'username' => 'Hazz',
            'email' => 'user@gmail.com',
            'number' => 66864,
            'password' => '123',
        ]);
        User::create([
            'username' => 'Eve',
            'email' => 'user1@gmail.com',
            'number' => 860309,
            'password' => '123',
        ]);
        User::create([
            'username' => 'Hinata',
            'email' => 'userr@gmail.com',
            'number' => 86030966,
            'password' => '123',
        ]);
        Galon::create([
            "user_id" => 1,
            "current" => true,  
        ]);
    }
}
