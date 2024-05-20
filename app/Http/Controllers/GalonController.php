<?php

namespace App\Http\Controllers;

use App\Http\Resources\GalonResource;
use App\Models\Galon;
use Illuminate\Http\Request;

class GalonController extends Controller
{
    public function showGalon()
    {
      $galon = Galon::get()->all();

      return response()->json([
        'galon' => GalonResource::collection($galon),
      ]);
    }
}
