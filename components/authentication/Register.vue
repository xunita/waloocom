<template>
  <div>
    <div class="w-full py-4">
      <div class="oath-log">
        <h4 class="text-center size-18 color-363636f mb-2">Sign up to Waloo</h4>
        <div class="flex flex-col space-y-2">
          <a
            href="#"
            class="button bg-white border rounded-md flex align-center space-x-2"
            ><svg
              class="h-5 w-5"
              viewBox="0 0 533.5 544.3"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                fill="#4285f4"
              />
              <path
                d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                fill="#34a853"
              />
              <path
                d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                fill="#fbbc04"
              />
              <path
                d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                fill="#ea4335"
              /></svg
            ><span class="size-14">Sign up with Google</span></a
          >
          <a
            href="#"
            class="button h-full bg-fb border rounded-md flex align-center space-x-2"
            ><client-only>
              <span class="mscourse block font-semibold color-363636f"
                ><client-only
                  ><svg
                    class="h-5 w-5 fbvg -mt-012x"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1365.12"
                    height="1365.12"
                    viewBox="0 0 14222 14222"
                  >
                    <circle cx="7111" cy="7112" r="7111" fill="#4267B2" />
                    <path
                      d="M9879 9168l315-2056H8222V5778c0-562 275-1111 1159-1111h897V2917s-814-139-1592-139c-1624 0-2686 984-2686 2767v1567H4194v2056h1806v4969c362 57 733 86 1111 86s749-30 1111-86V9168z"
                      fill="#fff"
                    /></svg></client-only></span
            ></client-only>
            <span class="size-14 text-white">Sign up in with Facebook</span></a
          >
        </div>
        <div class="border mt-10 rounded-md px-8 py-5 flex flex-col space-y-2">
          <!-- <div class="w-full">
            <label for="firstn" class="size-14">First Name</label>
            <br />
            <input
              id="firstn"
              type="text"
              class="border w-full py-1 h-7 size-145 rounded no-outlines outline-none px-2"
            />
          </div>
          <div class="w-full">
            <label for="lastn" class="size-14">Last Name</label>
            <br />
            <input
              id="last"
              type="email"
              class="border w-full py-1 h-7 size-145 rounded no-outlines outline-none px-2"
            />
          </div> -->
          <div class="w-full">
            <label for="email" class="size-14">Email</label>
            <br />
            <input
              id="email"
              v-model="email"
              type="email"
              class="border w-full py-1 h-7 size-145 rounded no-outlines outline-none px-2"
              :class="{
                'border-red-700': mailerror,
                'border-green-700': $linker.emailValidated(email),
              }"
            />
            <p
              v-show="mailerror"
              class="size-12 appearZ text-red-700 leading-1 pt-1"
            >
              Please, enter a valid email
            </p>
          </div>
          <div class="w-full">
            <label for="username" class="size-14">Username (Optionnal)</label>
            <br />
            <input
              id="username"
              type="text"
              class="border w-full py-1 h-7 size-145 rounded no-outlines outline-none px-2"
            />
          </div>
          <div class="w-full">
            <div class="flex align-center justify-between">
              <label for="pwd" class="size-14">Password</label>
            </div>
            <input
              id="pwd"
              v-model="pwd"
              :type="'password'"
              class="border pr-8 w-full py-1 h-7 size-145 rounded no-outlines outline-none px-2"
              :class="{
                'border-red-700': passerror,
                'border-green-700': $linker.pwdValidated(pwd),
              }"
            />
            <p
              v-show="passerror"
              class="size-12 appearZ text-red-700 leading-1 pt-1"
            >
              Password must be at least 8 characters including letters & numbers
            </p>
          </div>
          <div class="w-full">
            <div class="flex align-center justify-between">
              <label for="pwdx" class="size-14">Password Confirmation</label>
            </div>
            <input
              id="pwdx"
              v-model="pwdcf"
              :type="'password'"
              class="border pr-8 w-full py-1 h-7 size-145 rounded no-outlines outline-none px-2"
              :class="{
                'border-red-700s':
                  didpwdunmatch ||
                  ($linker.pwdValidated(pwd) &&
                    pwdcf.length >= pwd.length &&
                    !samepwd),
                'border-green-700': samepwd,
              }"
            />
            <p
              v-show="
                ($linker.pwdValidated(pwd) &&
                  pwdcf.length >= pwd.length &&
                  !samepwd) ||
                didpwdunmatch
              "
              class="size-12 appearZ text-red-700 leading-1 pt-1"
            >
              Passwords and its confirmation do not match.
            </p>
          </div>
          <div class="w-full">
            <div class="flex align-center space-x-2">
              <div>
                <div class="flex align-center justify-between">
                  <label for="city" class="size-14">Code</label>
                </div>
                <Country
                  title="code"
                  :left="true"
                  :content="[
                    '+216 - Tunisia',
                    '+225 - Ivory Coast',
                    '+229 - Nigeria',
                    '+221 - Mali',
                    '+226 - Niger',
                    '+229 - Nigeria',
                    '+221 - Mali',
                    '+226 - Niger',
                  ]"
                />
              </div>
              <div class="w-full">
                <div class="flex align-center justify-between">
                  <label for="city" class="size-14"
                    >Phone Number (Optionnal)</label
                  >
                </div>
                <input
                  id="tellnum"
                  v-model="phone"
                  type="tel"
                  class="border w-full py-1 h-7 size-14 rounded no-outlines outline-none px-2"
                />
              </div>
            </div>
          </div>
          <!-- <div class="w-full">
            <div class="flex align-center justify-between">
              <label for="dress" class="size-14">Adress</label>
            </div>
            <input
              id="dress"
              type="text"
              placeholder="Abuja Nigeria – 900001"
              class="border w-full py-1 h-7 size-145 rounded no-outlines outline-none px-2"
            />
          </div>
          <div class="w-full">
            <div class="flex align-center justify-between">
              <label for="dresss" class="size-14">City</label>
            </div>
            <input
              id="dresss"
              type="text"
              class="border w-full py-1 h-7 size-145 rounded no-outlines outline-none px-2"
            />
          </div>
          <div class="w-full flex align-center space-x-2">
            <div>
              <div class="flex align-center justify-between">
                <label for="ctry" class="size-14">Country</label>
              </div>
              <Country
                :left="true"
                title="country"
                :content="[
                  'Nigeria',
                  'Ivory coast',
                  'Tunisia',
                  'Cameroon',
                  'Kenya',
                  'Uganda',
                  'South Africa',
                  'Ghana',
                  'Morocco',
                  'Rwanda',
                ]"
              />
            </div>
            <div>
              <div class="flex align-center justify-between">
                <label for="city" class="size-14">State</label>
              </div>
              <Country
                title="state"
                :left="true"
                :content="[
                  'Abidjan',
                  'Bouake',
                  'Korhogo',
                  'Yamoussoukro',
                  'Daloa',
                ]"
              />
            </div>
            <div>
              <div class="flex align-center justify-between">
                <label for="citys" class="size-14">Postal code</label>
              </div>
              <input
                id="citys"
                type="text"
                class="border w-full py-1 h-7 size-145 rounded no-outlines outline-none px-2"
              />
            </div>
          </div> -->
          <div class="w-full flex align-center space-x-2 pt-4">
            <input
              id="senupd"
              type="checkbox"
              class="border rounded no-outlines outline-none"
            />
            <label for="senupd" class="size-12"
              >Keep me updated on the best offers from Waloo.</label
            >
          </div>
          <a
            class="button btn-004e66 relative top-05x border rounded-md flex align-center space-x-2"
            @click="signup"
          >
            <span class="size-14 text-white font-semibold">Sign up </span></a
          >
          <div class="text-center">
            <div class="inline-block size-13 mt-1">
              <span>By creating an account, you agree to the </span>
              <a href="#" class="color-004e66 underline-hover"
                >Terms of Service</a
              >
            </div>
          </div>
          <div class="w-fit m-0-auto">
            <div class="flex align-center text-center space-x-2 size-13 mt-2">
              <span>Have an account?</span>
              <a href="/login" class="color-004e66 underline-hover">Login</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pwd: '',
      pwdcf: '',
      pwdandcf: false,
      user: '',
      email: '',
      pwderr: false,
      pwdcferr: false,
      maierror: false,
      pwdhid: true,
      notpwdok: false,
      phone: '',
    }
  },
  computed: {
    didpwdunmatch() {
      return this.notpwdok === true
    },
    samepwd() {
      return (
        this.$linker.pwdValidated(this.pwd) &&
        this.$linker.pwdValidated(this.pwdcf) &&
        this.pwd === this.pwdcf
      )
    },
    pwdhidden() {
      return this.pwdhid === true
    },
    passcferror() {
      return this.pwdcferr === true
    },
    passerror() {
      return this.pwderr === true
    },
    mailerror() {
      return this.maierror === true
    },
  },
  watch: {
    email() {
      if (this.mailerror) {
        this.maierror = false
      }
    },
    pwd() {
      if (this.passerror) {
        this.pwderr = false
      }
      this.notpwdok = false
    },
    phone(newval, oldval) {
      if (isNaN(newval) || newval.toString().includes('.')) {
        this.phone = oldval
      } else this.phone = newval
    },
    pwdcf(newval, oldval) {
      if (newval.length < this.pwd.length && this.didpwdunmatch) {
        this.notpwdok = false
      }
    },
  },
  methods: {
    infosValidated() {
      if (this.$linker.emailValidated(this.email)) {
        this.maierror = false
      } else this.maierror = true

      if (this.$linker.pwdValidated(this.pwd)) {
        this.pwderr = false
      } else this.pwderr = true

      if (this.$linker.pwdValidated(this.pwd) && this.samepwd) {
        this.notpwdok = false
      } else if (this.$linker.pwdValidated(this.pwd) && !this.samepwd)
        this.notpwdok = true

      return (
        this.mailerror === false &&
        this.passerror === false &&
        this.passcferror === false &&
        this.samepwd === true
      )
    },
    signup() {
      if (this.infosValidated());
    },
  },
}
</script>
