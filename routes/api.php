<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\InfoController;
use App\Http\Controllers\LedgerController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);

    // Info
    Route::post('/info', [InfoController::class, 'all']);

    // Kas
    Route::group(['prefix' => 'balance'], function () {
        Route::post('default', [LedgerController::class, 'defaultKas']);
        Route::post('remaining', [LedgerController::class, 'remainingBalance']);
        Route::post('current', [LedgerController::class, 'currentBalance']);
        Route::post('remaining-people', [LedgerController::class, 'remainingPeople']);
        Route::post('monthly-history', [LedgerController::class, 'monthlyHistory']);
    });
});

Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);
