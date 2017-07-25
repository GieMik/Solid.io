<?php

namespace App\Http\Middleware;

use Closure;

class Cors
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $whiteListDomains = ['http://localhost:8080'];

        if (isset($request->server()['HTTP_ORIGIN'])) {
            $origin = $request->server()['HTTP_ORIGIN'];
            if (in_array($origin, $whiteListDomains)) {
                header('Access-Control-Allow-Origin: ' . $origin);
                header('Access-Control-Allow-Headers: Origin, Content-Type, Authorization');
            }
        }

        return $next($request);
    }
}
