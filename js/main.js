const { createApp } = Vue

createApp({
    data() {
      	return {
        	message: 'Messaggio di prova!',
        	image: 'https://picsum.photos/1000/400'
      	}
    }
}).mount('#app')