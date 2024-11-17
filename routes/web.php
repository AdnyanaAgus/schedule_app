<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GoogleLoginController;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Calendar');
});
Route::get('/testing', function () {
    return Inertia::render('Testing');
});
Route::get('/Login', function() {
    return Inertia::render('Login');
})->name('app.login');
Route::prefix('oauth')->group(function(){
    Route::prefix('google')->group(function(){
        Route::get('/redirect', [GoogleLoginController::class, 'redirectToGoogle'])->name('google.redirect');
        Route::get('/callback', [GoogleLoginController::class, 'handleGoogleCallback'])->name('google.callback');
    });
});
