<template>
    <div class="login-container">
      <img src="../assets/garnierLogo.jpg" alt="Garnier Logo" class="login garnier-logo">
  
      <p class="message garnier-message">{{ message }}</p>
      <!-- Login Form -->
      <form v-if="!showRegisterForm" @submit.prevent="login" class="login-form">
        <h1 class="login-heading garnier-heading">Login</h1>
        <label for="loginEmail" class="form-label">Email:</label>
        <input type="email" id="loginEmail" v-model.trim="loginForm.email" required class="input-field">
        <label for="loginPassword" class="form-label">Password:</label>
        <input type="password" id="loginPassword" v-model="loginForm.password" required class="input-field">
        <button type="submit" class="submit-button garnier-button">Login</button>
      </form>
  
      <!-- Registration Form -->
      <form v-if="showRegisterForm" @submit.prevent="register" class="register-form">
        <h1 class="login-heading garnier-heading">Registration</h1>
        <label for="registerEmail" class="form-label">Email:</label>
        <input type="email" id="registerEmail" v-model.trim="registerForm.email" required class="input-field">
        <label for="registerPassword" class="form-label">Password:</label>
        <input type="password" id="registerPassword" v-model="registerForm.password" required class="input-field">
        <label for="confirmPassword" class="form-label">Confirm Password:</label>
        <input type="password" id="confirmPassword" v-model="confirmPassword" required class="input-field">
        <button type="submit" class="submit-button garnier-button">Register</button>
      </form>
  
      <!-- Toggle between Login and Registration forms -->
      <button @click="toggleForm" class="toggle-button garnier-button">{{ showRegisterForm ? 'Back to Login' : 'Register' }}</button>
  
      <!-- Error message -->
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
  </template>
  
  <script>
  import { users } from '../data/items.js';
  
  export default {
    
    data() {
      return {
        
        message: '',
        loginForm: {
          email: '',
          password: ''
        },
        registerForm: {
          email: '',
          password: ''
        },
        confirmPassword: '',
        showRegisterForm: false,
        errorMessage: ''
      }
    },
    
    methods: {
      login() {
        const { email, password } = this.loginForm;
        const userFound = users.find(user => user.email === email && user.password === password);
        if (userFound) {
          userFound.isloggedIn = true;
          console.log(userFound.isloggedIn);
          localStorage.setItem('token', '12345');
          this.$router.push({ name: 'home' });
          
        } else {
          this.errorMessage = 'Invalid email or password';
        }
        this.clearFields();
      },
  
      clearFields() {
        this.loginForm.email = '';
        this.loginForm.password = '';
      },
  
      register() {
        // Perform registration logic
        if (this.registerForm.password !== this.confirmPassword) {
          this.errorMessage = 'Passwords do not match';
          return;
        }
        // Check if email already exists
        if (users.some(user => user.email === this.registerForm.email)) {
          this.errorMessage = 'Email already registered';
          return;
        }
        
        // Add new user to the users array
        users.push({
          email: this.registerForm.email,
          password: this.registerForm.password, 
          isloggedIn: false,
          userCart: []
        });
  
        console.log(users);
        this.message = "Registration Complete";
        
        // Reset form fields and error message
        this.registerForm.email = '';
        this.registerForm.password = '';
        this.confirmPassword = '';
        this.errorMessage = '';
  
        // Redirect to login page after successful registration
        this.showRegisterForm = false;
      },
      toggleForm() {
        this.showRegisterForm = !this.showRegisterForm;
        this.errorMessage = ''; // Clear error message when toggling between forms
      }
    },
    computed: {
      users() {
        // Retrieve users array from wherever it's defined/imported
        return users || [];
      }
    }
  }
  </script>
  
  <style scoped>
  /* Login Container Styles */
  .login-container {
    max-width: 400px;
    margin: 0 auto;
    text-align: center;
  }
  
  /* Shop Logo Styles */
  .shopLogo {
    width: 150px;
    margin-bottom: 20px;
  }
  
  /* Login Heading Styles */
  .login-heading {
    color: #64A749; /* Garnier green color */
  }
  
  /* Message Styles */
  .message {
    color: #777; /* Dark gray color */
    margin-bottom: 20px;
  }
  
  /* Form Label Styles */
  .form-label
  {
    font-weight: bold;
    display: block;
    text-align: left;
    margin-bottom: 5px;
  }
  
  /* Input Field Styles */
  .input-field {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
  }
  
  /* Submit Button Styles */
  .submit-button {
    width: 100%;
    padding: 10px;
    background-color: #64A749; /* Garnier green color */
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .submit-button:hover {
    background-color: #4c8738; /* Darker shade of Garnier green */
  }
  
  /* Toggle Button Styles */
  .toggle-button {
    width: 100%;
    padding: 10px;
    background-color: #ccc; /* Light gray color */
    color: #333; /* Dark gray color */
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    margin-top: 10px;
  }
  
  .toggle-button:hover {
    background-color: #bbb; /* Slightly darker shade of light gray */
  }
  
  /* Error Message Styles */
  .error {
    color: red;
    margin-top: 10px;
  }
  </style>
  