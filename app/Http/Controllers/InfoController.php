<?php

namespace App\Http\Controllers;

use App\Models\Information;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class InfoController extends Controller
{
    public function all(): JsonResponse
    {
        return response()->json([
            'data' => Information::all()
                ->makeHidden(['created_at', 'updated_at'])
        ]);
    }
}
