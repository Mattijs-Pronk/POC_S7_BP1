<script setup>
import {loginUser} from '../assets/apiCalls';
</script>

<template>
    <section class="vh-100">
        <div class="container-fluid h-custom">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-md-9 col-lg-6 col-xl-5">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                        class="img-fluid" alt="Sample image">
                </div>
                <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                    <form>

                        <div class="divider d-flex align-items-center my-4">
                            <p class="text-center fw-bold mx-3 mb-0" style="font-size:x-large;">Login</p>
                        </div>

                        <p id="infoMessageId" class="text-center fw-bold mx-3 mb-0" style="font-size: small;">
                            {{ infoMessage }}
                        </p>

                        <!-- Email input -->
                        <div data-mdb-input-init class="form-outline mb-4">
                            <input type="email" id="form3Example3" class="form-control form-control-lg" v-model="email"
                                placeholder="Enter a valid email address" />
                            <label class="form-label" for="form3Example3">Email address</label>
                        </div>

                        <!-- Password input -->
                        <div data-mdb-input-init class="form-outline mb-3">
                            <input type="password" id="form3Example4" class="form-control form-control-lg"
                                v-model="password" placeholder="Enter password" />
                            <label class="form-label" for="form3Example4">Password</label>
                        </div>

                        <div class="d-flex justify-content-between align-items-center">
                            <button type="button" data-mdb-button-init data-mdb-ripple-init
                                class="btn btn-primary btn-lg" style="padding-left: 2.5rem; padding-right: 2.5rem;"
                                v-on:click="Login">Login</button>
                            <a href="#!" class="text-body">Forgot password?</a>
                        </div>

                    </form>
                </div>
            </div>
        </div>
        <div
            class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
            <!-- Copyright -->
            <div class="text-white mb-3 mb-md-0">
                Copyright © 2024. All rights reserved.
            </div>
            <!-- Copyright -->
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            infoMessage: '',
        }
    },
    methods: {
        async Login() {
            const { data, status } = await loginUser(this.email, this.password);
            if (status === 200) {
                console.log('ingelogd')
                document.getElementById("infoMessageId").style.color = "green";

            } else {
                console.log('mislukt')
                document.getElementById("infoMessageId").style.color = "red";
            }
            console.log(data)
            this.infoMessage = data.message || data.error;
        },
    }
}
</script>

<style scoped>
.divider:after,
.divider:before {
    content: "";
    flex: 1;
    height: 1px;
    background: #eee;
}

.h-custom {
    height: calc(100% - 73px);
}

@media (max-width: 450px) {
    .h-custom {
        height: 100%;
    }
}
</style>