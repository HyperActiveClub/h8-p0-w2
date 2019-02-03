var nama = prompt('Nama harus diisi');
var peran = prompt('Halo ' + nama + ' Pilih peranmu untuk memulai game!');
  if(nama === 'Nina'){
    console.log('Selamat datang di Dunia Proxytia, Nina');
            console.log('Halo ' + peran + ' Nina, kamu dapat menyerang dengan senjatamu!');
  }else if(nama === 'Danu'){
            console.log('Selamat datang di Dunia Proxytia, Danu');
            console.log('Halo ' + peran + ' Danu, kamu akan membantu temanmu yang terluka.');
        }else if(nama === 'Zero'){
            console.log('Selamat datang di Dunia Proxytia, Zero');
            console.log('Halo ' + peran + ' Zero, ciptakan keajaiban yang membantu kemenanganmu!');
        }else{
    console.log("Syarat Salah atau Tidak Terpenuhi");
  }