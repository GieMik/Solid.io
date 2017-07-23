<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

/**
 * Class UserController
 *
 * This controller is responsible for creating new user
 *
 * @package App\Http\Controllers
 */
class UserController extends Controller
{
    /**
     * Signs up new user
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function postSignUp(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:255',
            'surname' => 'required|max:255',
            'email' => 'required|email|max:255|unique:users',
            'password' => 'required|min:6|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors(),
            ]);
        }

        $user = new User();
        $user->name = $request['name'];
        $user->surname = $request['surname'];
        $user->email = $request['email'];
        $user->password = bcrypt($request['password']);
        $user->save();

        return response()->json([
            'success' => true,
            'errors' => '',
        ]);
    }
}
