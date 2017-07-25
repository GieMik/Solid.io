<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\JsonResponse;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
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
    use AuthenticatesUsers;

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

    /**
     * Signs in user
     *
     * @param Request $request
     * @return mixed
     */
    public function postSignIn(Request $request)
    {
        $email = $request['email'];
        $password = $request['password'];

        $request->request->add([
            'username' => $email,
            'password' => $password,
            'grant_type' => 'password',
            'client_id' => env('API_CLIENT_ID'),
            'client_secret' => env('API_CLIENT_SECRET'),
            'scope' => '*',
        ]);

        $tokenRequest = Request::create(env('APP_URL') . '/oauth/token', 'post');

        return Route::dispatch($tokenRequest)->getContent();
    }
}
