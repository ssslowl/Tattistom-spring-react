package com.exam.tattistomcrm.controller;

import com.exam.tattistomcrm.dto.JwtAuthenticationResponse;
import com.exam.tattistomcrm.dto.SignInRequest;
import com.exam.tattistomcrm.dto.SignUpRequest;
import com.exam.tattistomcrm.service.AuthenticationService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
    @RequestMapping("/auth")
    @RequiredArgsConstructor
    @CrossOrigin("http://localhost:5173")
    @Tag(name = "Аутентификация")
    public class AuthController {
        private final AuthenticationService authenticationService;

        @Operation(summary = "Регистрация пользователя")
        @PostMapping("/sign-up")
        public JwtAuthenticationResponse signUp(@RequestBody @Valid SignUpRequest request) {
            return authenticationService.signUp(request);
        }

        @Operation(summary = "Авторизация пользователя")
        @PostMapping("/sign-in")
        public JwtAuthenticationResponse signIn(@RequestBody @Valid SignInRequest request) {
            return authenticationService.signIn(request);
        }

    }
