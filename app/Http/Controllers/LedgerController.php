<?php

namespace App\Http\Controllers;

use App\Models\Config;
use App\Models\Ledger;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class LedgerController extends Controller
{
    public $firstDateThisMonth;
    public $lastDateThisMonth;
    public $month;

    public function __construct()
    {
        $carbon = Carbon::now();

        $this->firstDateThisMonth = $carbon->startOfMonth();
        $this->lastDateThisMonth = $carbon->endOfMonth();
        $this->month = $carbon->month;
    }

    public function defaultKas(): JsonResponse
    {
        return response()->json([
            'data' => [
                'default_kas' => Config::where('key', 'kas_default')->first('value') ?? 0,
            ]
        ]);
    }

    public function remainingBalance(): JsonResponse
    {
        return response()->json([
            'data' => Ledger::latest()->first('final_balance') ?? 0,

        ]);
    }

    public function currentBalance(): JsonResponse
    {
        return response()->json([
            'data' => Ledger::whereBetween('created_at', [$this->firstDateThisMonth, $this->lastDateThisMonth])
                ->where('status', 'IN')
                ->sum('amount'),

        ]);
    }

    public function remainingPeople(): JsonResponse
    {
        $allUser = User::all()->count();

        return response()->json([
            'data' => floor($allUser - Ledger::whereBetween('created_at', [$this->firstDateThisMonth, $this->lastDateThisMonth])
                ->where('status', 'IN')
                ->where('transaction_purpose', 'Bayar Kas')
                ->count()),

        ]);
    }

    public function monthlyHistory(Request $request): JsonResponse
    {
        if ($request->exists('month')) {
            $carbon = Carbon::now();

            $this->firstDateThisMonth = Carbon::createFromDate($carbon->year, $request->month, $carbon->day)->startOfMonth();
            $this->lastDateThisMonth = Carbon::createFromDate($carbon->year, $request->month, $carbon->day)->endOfMonth();

            $ledger = Ledger::whereBetween('created_at', [$this->firstDateThisMonth, $this->lastDateThisMonth])->with('user')->get();
        } else
            $ledger = Ledger::whereBetween('created_at', [$this->firstDateThisMonth, $this->lastDateThisMonth])->with('user')->get();

        return response()->json([
            'data' => $ledger
        ]);
    }
}
