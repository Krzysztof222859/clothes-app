<script>
import { useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'
// import { useFirebaseAuth } from 'vuefire'
</script>

<script setup>

const name = ref('')
const surname = ref('')
const nickname = ref('')
const address = ref('')

const router = useRouter()

// const auth = useFirebaseAuth()

// const error = ref(null)

function redirectToHome() {
    router.push('/home')
}

// przekazanie wpisanych danych do bazy

async function addUser(name, email, nickname, address) {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        name: name,
        email: email,
        nickname: nickname,
        address: address,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    redirectToHome()
  }

</script>

<template>
  <form>
    <h1 class='lato-light'>Wprowadź dane osoby:</h1>
    <div class="container addingUser-container rounded">
      <div class="col cols">
        <input type="text" class="form-control" placeholder="Imię">
      </div>
        <div class="col cols">
          <input type="text" class="form-control" placeholder="Nazwisko">
        </div>
     <div class="form-group cols">
       <input type="text" class="form-control" id="inputNickname" placeholder="Ksywka">
    </div>
    <div class="form-group cols">
      <input type="text" class="form-control" id="inputAddress" placeholder="Adres">
    </div>
  </div>
  </form>
  <div class="container">
    <div class="col">
      <button type="button" class="btn btn-secondary btn-first" @click="addUser()">
            Dodaj
        </button>
      <button type="button" class="btn btn-secondary btn-second" @click="redirectToHome()">
            Wróć
        </button>
    </div>
  </div>
      
</template>

<style scoped>

.btn {
    /* background-color: rgb(36, 107, 174); */
    border-color: rgb(36, 107, 174);
    border-width: 2px;
}

.btn-first:hover {
    background-color: rgb(68, 174, 36);
    border-color: rgb(1, 15, 29);
    border-width: 2px;
}

.btn-second:hover {
    background-color: rgb(177, 20, 20);
    border-color: rgb(1, 15, 29);
    border-width: 2px;
}

.logo {
    font-family: 'Chewy'; 
    font-size: 50px;
    margin: 40px 0px;
    background: -webkit-linear-gradient(315deg, #41bc85 25%, #354fce);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-top: 10px;
}

.btn {
    
    height: 55px;
    width: 30%;
    font-size: 1em;
    /* font-family: 'Lato'; */
    margin-left: 5px;
    margin-right: 5px;
    margin-top: 20px;
}

.form-control {
  /* background-color: rgb(36, 107, 174); */
  border-color: rgb(36, 107, 174);
  border-width: 3px;
  width: 400px;
  height: 45px;
  margin-bottom: 30px;
  font-family: 'Calibri';
  font-size: large;
  border-radius: 8px;
}

.lato-light {
    /* font-family: 'Chewy';  */
    color: rgb(36, 107, 174);
    margin-bottom: 50px;
    font-size: 40px;
}

</style>

