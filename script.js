const topBlur = document.querySelector('.topBlur');
const menu = document.querySelector('#menu');
//hidesAndShowsTheMenuOnScroll
$(window).scroll(function(){menu.classList.add('hideShow');topBlur.classList.add('active');setTimeout( () => {menu.classList.remove('hideShow');topBlur.classList.remove('active');}, 500);});


const navLoadingContainer = document.querySelector('.navLoadingContainer');
const loadingBG = document.querySelector(".loadingBG"), loadingBGRight = document.querySelector('.loadingBGRight'), loadingBGLeft = document.querySelector('.loadingBGLeft'), loadingBGBottom = document.querySelector('.loadingBGBottom'), loadingBGTop = document.querySelector('.loadingBGTop');

//onLoadAnimations
function onLoad() {
  menu.classList.toggle('loading');

  navLoadingContainer.classList.toggle('active');
  navLoadingContainer.classList.remove('collapse');
  menu.classList.remove('fadeIn');
  loadingBG.classList.toggle('active');
  loadingBGRight.classList.toggle('active');
  loadingBGLeft.classList.toggle('active');
  loadingBGBottom.classList.toggle('active');
  loadingBGTop.classList.toggle('active');

  setTimeout(() => {
    loadingBG.classList.toggle('active');
    loadingBG.style.transform = "translateY(-500%)";
    loadingBGRight.classList.toggle('active');
    loadingBGLeft.classList.toggle('active');
    loadingBGBottom.classList.toggle('active');
    loadingBGTop.classList.toggle('active');
    navLoadingContainer.classList.toggle('active');
    navLoadingContainer.classList.add('collapse');
    menu.classList.toggle('loading');
    menu.classList.add('fadeIn');

    window.scrollTo(0, 0);
    }, 2000);
}

const body = document.querySelector('body');
const bgsidebar = document.querySelector('#bgsidebar');

const bottomLine = document.querySelector('#bottomLine'), upperLine = document.querySelector('#upperLine');
const mainPage = document.querySelector('#mainPage');
const footerSection = document.querySelector('#footerSection');

const menuMainContainer = document.querySelector('.menuMainContainer');
const mainBodySection = document.querySelector('.mainBodySection');

const menuToggle = document.querySelector('#menuToggle');
const resonateButton = document.querySelector('.resonateButton');

const navMainMenuContainer = document.querySelector('.mavMainMenuContainer'), navMainMenuLeft = document.querySelector('.navMainMenuLeft'), navMainMenuRight = document.querySelector('.navMainMenuRight'), navMainMenuCenter = document.querySelector('.navMainMenuCenter'), rightMenuItemImg = document.querySelectorAll('.rightMenuItemImg'), leftMenuItemImg = document.querySelectorAll('.leftMenuItemImg'), centerMenuItemImg = document.querySelector('.centerMenuItemImg'), navBgImgDots = document.querySelector('.navBgImgDots'), navBgSparkle = document.querySelectorAll('.navBgSparkle');

let screenWidth;
setInterval(function(){
  screenWidth = parseFloat(window.innerWidth);
  if(screenWidth < 825){
    navMainMenuContainer.style.transform = "scale("+ screenWidth/1200 + ") translateY(20%)";
  }
  if(screenWidth > 825){
    navMainMenuContainer.style.transform = "scale("+ screenWidth/2000 + ") translateY(20%)";
  }
}, 5)

resonateButton.addEventListener('click', function(){
  menuToggle.click();
})
resonateButton.addEventListener('mousedown', function(){
  resonateButton.classList.add('clicked');
})
resonateButton.addEventListener('mouseup', function(){
  resonateButton.classList.remove('clicked');
})
resonateButton.addEventListener('touchstart', function(){
  resonateButton.classList.add('clicked');
})
resonateButton.addEventListener('touchend', function(){
  resonateButton.classList.remove('clicked');
})

menuToggle.addEventListener('click', () => {
  //animates the menuToggle
  bottomLine.classList.toggle('hover');
  upperLine.classList.toggle('hover');

  //hides and shows the audioPlayer
  audioContainer.classList.toggle('active');

  //hides and shows the bodyScrollBar
  body.classList.toggle('active');

  //hides and shows the topBlur
  topBlur.classList.toggle('active');

  //hides and shows the menu
  menuMainContainer.classList.toggle('active');
  mainBodySection.classList.toggle('active');

  navBgImgDots.classList.toggle('active')

  navBgSparkle[0].classList.toggle('active');
  navBgSparkle[1].classList.toggle('active');
  navBgSparkle[2].classList.toggle('active');
  navBgSparkle[3].classList.toggle('active');
  navBgSparkle[4].classList.toggle('active');
  navBgSparkle[5].classList.toggle('active');
  navBgSparkle[6].classList.toggle('active');
  navBgSparkle[7].classList.toggle('active');
  navMainMenuCenter.classList.toggle('active');

  navMainMenuRight.classList.toggle('active');
  rightMenuItemImg[0].classList.toggle('active');
  rightMenuItemImg[1].classList.toggle('active');
  rightMenuItemImg[2].classList.toggle('active');

  navMainMenuLeft.classList.toggle('active');
  leftMenuItemImg[0].classList.toggle('active');
  leftMenuItemImg[1].classList.toggle('active');
  leftMenuItemImg[2].classList.toggle('active');

  centerMenuTeam.classList.remove('clicked');
  homeTrigger.classList.remove('clicked');

  cBE.click();
  chapExitBtn.click();
  viewCloseButton.click();

  //faq
  chatSideBarContainer.classList.remove('active');
  headerSneakPeeksGallery.classList.remove('active');
  headerFaqCard.classList.remove('active');
  headerFaqTitleImg.classList.remove('active');

  phoneHomeButton.click();

  for(let i = 0; i < closeTrigger.length; i++){
    closeTrigger[i].click();
  }
});




//audioPlayer//
const audioContainer = document.querySelector('#audioContainer'), audio = document.querySelector("#music"), artWork = document.querySelector('#artWork'), artistName = document.querySelector('#artistName'), songName = document.querySelector('#songName'), playMusic = document.querySelector('#playMusic'), pauseMusic = document.querySelector('#pauseMusic'), nextMusic = document.querySelector('#nextMusic'), prevMusic = document.querySelector('#prevMusic'), arrowMusicL = document.querySelector('#arrowMusicL'), arrowMusicR = document.querySelector('#arrowMusicR'), musicOpen = document.querySelector('#musicOpen'), musicClose = document.querySelector('#musicClose'), audioContainer3 = document.querySelector('.audioContainer3'), disk = document.querySelector('.disk');
let songIndex = 0, deadend = 0, allSongs = [
  {
    name: "Red Night - XIUS",
    path: "audios/lore music final.mp3",
    artist: "CXGNUS OST 1",
    art: "/imgs/CXGNUS CITY.webp"
  }
];  
audio.volume = 0.5; audio.src = allSongs[0].path; songName.innerHTML = allSongs[0].name; artistName.innerHTML = allSongs[0].artist; artWork.src = allSongs[0].art; pauseMusic.style.display = "block"; playMusic.style.display="none"; prevMusic.style.display = "none"; nextMusic.style.display="block"; 
function setVolume(value) {
audio.volume = value / 100;

};
arrowMusicL.addEventListener('click', () => {
  arrowMusicL.classList.add('active');
  headerSneakPeeksGallery.classList.add('active');
  audioContainer3.classList.add('active');
  musicOpen.classList.add('active');
});
arrowMusicR.addEventListener('click', () => {
  arrowMusicL.classList.remove('active');
  headerSneakPeeksGallery.classList.remove('active');
  audioContainer3.classList.remove('active');
  musicOpen.classList.remove('active');
});
pauseMusic.addEventListener('click', () => {
  audio.pause();
  playMusic.style.display = "block";
  pauseMusic.style.display = "none";
  
  disk.classList.remove('diskAnimation');
});
playMusic.addEventListener('click', () => {
  audio.play();
  playMusic.style.display = "none";
  pauseMusic.style.display = "block";
  
  songName.style.visibility = "unset";
  disk.classList.add('diskAnimation');
});
nextMusic.addEventListener('click', () => {
 
  if(songIndex+1 == allSongs.length){
    songIndex += 0;
    audio.currentTime = 0;
    prevMusic.style.display="block";
    nextMusic.style.display="block";
  }else{
    songIndex += 1;
    songName.innerHTML = allSongs[songIndex].name;
    audio.src = allSongs[songIndex].path;
    artistName.innerHTML = allSongs[songIndex].artist;
    artWork.src = allSongs[songIndex].art;
    audio.play();
    prevMusic.style.display="block";
    nextMusic.style.display="block";
    
    audioProgBar.style.setProperty('opacity', 0);
    setTimeout(()=>{
      audioProgBar.style.setProperty('opacity', 100);
    },2000)
  
  }
});
prevMusic.addEventListener('click', () => {
  
  if(songIndex == 0){
    songIndex += 0;
    audio.currentTime = 0;
    prevMusic.style.display="block";
    nextMusic.style.display="block";
  }
  else{
    songIndex -= 1;
  songName.innerHTML = allSongs[songIndex].name;
  audio.src = allSongs[songIndex].path;
  artistName.innerHTML = allSongs[songIndex].artist;
  artWork.src = allSongs[songIndex].art;
  audio.play();

  audioProgBar.style.setProperty('opacity', 0);
  setTimeout(()=>{
    audioProgBar.style.setProperty('opacity', 100);
  },2000)
  prevMusic.style.display="block";
  nextMusic.style.display="block";
  }
});

audio.addEventListener('ended', () => {

  if(songIndex == allSongs.length){
    songIndex += 0;
    audio.currentTime = 0;
    prevMusic.style.display="block";
    nextMusic.style.display="block";
    audio.play()
  }

  if(songIndex == 0){
    songIndex += 0;
    audio.currentTime = 0;
    prevMusic.style.display="block";
    nextMusic.style.display="block";
    audio.play()
  }
});

const audioProgBar = document.querySelector('.audioProgBar')

audio.ontimeupdate = function audioBar(){
  let at = Math.trunc(audio.currentTime);
  let ad = audio.duration;
  let prog = Math.floor((at*100/ad));

  audioProgBar.style.setProperty('--widthBar', prog);
}







const redFooter = document.querySelector('.redFooter'), redFooter1 = document.querySelectorAll('.redFooter1'), orangeFooter = document.querySelectorAll('.orangeFooter'), orangeFooter1 = document.querySelector('.orangeFooter1');

const observerDesignFooter = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      redFooter.classList.add('redFooterTransition');
      redFooter1[0].classList.add('redFooter1Transition');
      redFooter1[1].classList.add('redFooter1Transition'); orangeFooter[0].classList.add('orangeFooterTransition');
      orangeFooter[1].classList.add('orangeFooterTransition');
      orangeFooter1.classList.add('orangeFooter1Transition');
      return;
    }
    redFooter.classList.remove('redFooterTransition');
    redFooter1[0].classList.remove('redFooter1Transition');
    redFooter1[1].classList.remove('redFooter1Transition');
    orangeFooter[0].classList.remove('orangeFooterTransition');
    orangeFooter[1].classList.remove('orangeFooterTransition');
    orangeFooter1.classList.remove('orangeFooter1Transition');
  });
});
observerDesignFooter.observe(document.querySelector('.designFooter'));


const bar = document.querySelector('.progressBar');
const barStyle = getComputedStyle(bar);

const loadingParagraph = document.querySelector('.loadingParagraph');
const revealUsText = document.querySelector('.revealUsText');
const initialLoadingContainer = document.querySelector('.initialLoadingContainer');

const loadingImgClick = document.querySelector('.loadingImgClick');

const progressBarBorder = document.querySelector('.progressBarBorder');
const html = document.querySelector('.html');
const galleryPart1 = document.querySelector('.galleryPart1');
const gp1Style = getComputedStyle(galleryPart1);
const galleryPart2 = document.querySelector('.galleryPart2');
const gp2Style = getComputedStyle(galleryPart2);
const galleryPart3 = document.querySelector('.galleryPart3');
const gp3Style = getComputedStyle(galleryPart3);
const galleryPart4 = document.querySelector('.galleryPart4');
const gp4Style = getComputedStyle(galleryPart4);
const galleryPart5 = document.querySelector('.galleryPart5');
const gp5Style = getComputedStyle(galleryPart5);
const galleryPart6 = document.querySelector('.galleryPart6');
const gp6Style = getComputedStyle(galleryPart6);
/*
const galleryPart7 = document.querySelector('.galleryPart7');
const gp7Style = getComputedStyle(galleryPart7);
*/





const loaderGalleryOutterContainer = document.querySelector('.loaderGalleryOutterContainer');
const initializingContainer = document.querySelector('.initializingContainer');
const main = document.querySelector('.main');
initializingContainer.style.opacity = "1";
html.style.display = 'unset';
html.style.overflow = 'hidden';

loaderGalleryOutterContainer.style.opacity = '0';


window.addEventListener("load", function(){
  html.style.overflow = 'hidden';
  setTimeout(function(){
    main.classList.add('active');
    loaderGalleryOutterContainer.style.opacity = '1';
    initializingContainer.style.opacity = "0";
    var loadingAnimation = setInterval(progressBar, 3);
    function progressBar() {
      var randomize = Math.random() * (.65 - -0.05) + -0.05;
    
      const width = parseFloat(barStyle.getPropertyValue('--width')) || 0;
     // const opacityColored = parseFloat(loadingImgColoredStyle.getPropertyValue('--opacityColored')) || 0;
      //const imgHeight = parseFloat(loadingImgStyle.getPropertyValue('--imgHeight')) || 0;
      bar.style.setProperty('--width', width + randomize + 0.2);
     // loadingImgColored.style.setProperty('--opacityColored', opacityColored + randomize);
     // loadingImg[0].style.setProperty('--imgHeight', imgHeight + randomize);
     // loadingImg[1].style.setProperty('--imgHeight', imgHeight + randomize);
    
      const tyGP1 = parseFloat(gp1Style.getPropertyValue('--transformY')) || -100;
      if(tyGP1 >= -0.2){
        galleryPart1.style.setProperty('--transformY', tyGP1 + 0);
        galleryPart1.classList.add('colorHover');
        clearInterval(loadingAnimation);
        loadingParagraph.style.opacity = "100%";
        revealUsText.style.opacity= "100";
        loadingImgClick.style.opacity = "100%";
        loadingImgClick.classList.toggle('active');
       // loadingImgWhite.classList.toggle('active');
        //clickMe.classList.toggle('active');
        bar.classList.toggle('stop');
        //loadingHide[0].style.display = "none";
        //loadingHide[1].style.display = "none";
        //loaderArrows.style.opacity = "100%";
      }
      else{
        galleryPart1.style.setProperty('--transformY', tyGP1 + randomize + 0.3);
      }
    
      const tyGP2 = parseFloat(gp2Style.getPropertyValue('--transformY')) || -100;
      if(tyGP2 >= .1){
        galleryPart2.style.setProperty('--transformY', tyGP2 + 0);
        galleryPart2.classList.add('colorHover');
      }
      else{
        galleryPart2.style.setProperty('--transformY', tyGP2 + randomize + 0.35);
      }
    
      const tyGP3 = parseFloat(gp3Style.getPropertyValue('--transformY')) || -100;
      if(tyGP3 >= -0.2){
        galleryPart3.style.setProperty('--transformY', tyGP3 + 0);
        galleryPart3.classList.add('colorHover');
    
      }
      else{
        galleryPart3.style.setProperty('--transformY', tyGP3 + randomize + 0.45);
      }
    
      const tyGP4 = parseFloat(gp4Style.getPropertyValue('--transformY')) || -100;
      if(tyGP4 >= -0.2){
        galleryPart4.style.setProperty('--transformY', tyGP4 + 0);
        galleryPart4.classList.add('colorHover');
    
      }
      else{
        galleryPart4.style.setProperty('--transformY', tyGP4 + randomize + 0.65);
      }
    
      const tyGP5 = parseFloat(gp5Style.getPropertyValue('--transformY')) || -100;
      if(tyGP5 >= -0.2){
        galleryPart5.style.setProperty('--transformY', tyGP5 + 0);
        galleryPart5.classList.add('colorHover');
    
      }
      else{
        galleryPart5.style.setProperty('--transformY', tyGP5 + randomize + 0.7);
      }
    
      const tyGP6 = parseFloat(gp6Style.getPropertyValue('--transformY')) || -100;
      if(tyGP6 >= -0.2){
        galleryPart6.style.setProperty('--transformY', tyGP6 + 0);
        galleryPart6.classList.add('colorHover');
    
      }
      else{
        galleryPart6.style.setProperty('--transformY', tyGP6 + randomize + .85);
      }
    
        /*
      const tyGP7 = parseFloat(gp7Style.getPropertyValue('--transformY')) || -100;
      if(tyGP7 >= -0.2){
        galleryPart7.style.setProperty('--transformY', tyGP7 + 0);
        galleryPart7.classList.add('colorHover');
      }
      else{
        galleryPart7.style.setProperty('--transformY', tyGP7 + randomize + 1);
    
      }
    */
    
    
      if (width >= 100) {
        
      }
    }
  },1000)
})



const rotatingLoader = document.querySelector('.rotatingLoader');
const rotatingLoaderImg = document.querySelector('.rotatingLoaderImg');
const loadingImgP = document.querySelector('.loadingImgP');

loadingImgClick.addEventListener('click', () => {
  loadingImgClick.classList.add('pointNone');
  progressBarBorder.classList.toggle('active');
  loadingImgP.style.animation = "1";
  html.style.overflow = 'hidden';

  setTimeout(()=>{
    galleryPart1.classList.add('wave');
  },0)
  setTimeout(()=>{
    galleryPart2.classList.add('wave');
  },100)
  setTimeout(()=>{
    galleryPart3.classList.add('wave');
  },200)
  setTimeout(()=>{
    galleryPart4.classList.add('wave');
    galleryPart1.classList.remove('wave');
  },300)
  setTimeout(()=>{
    galleryPart5.classList.add('wave');
    galleryPart2.classList.remove('wave');
  },400)
  setTimeout(()=>{
    galleryPart6.classList.add('wave');
    galleryPart3.classList.remove('wave');
  },500)
  setTimeout(()=>{
    galleryPart1.style.setProperty('--transformY', -100);
    galleryPart4.classList.remove('wave');
  },600)
  setTimeout(()=>{
    galleryPart2.style.setProperty('--transformY', -100);
    galleryPart5.classList.remove('wave');
  },700)
  setTimeout(()=>{
    galleryPart3.style.setProperty('--transformY', -100);
    galleryPart6.classList.remove('wave');
  },800)
  setTimeout(()=>{
    galleryPart4.style.setProperty('--transformY', -100);
  },900)
  setTimeout(()=>{
    galleryPart5.style.setProperty('--transformY', -100);
  },900)
  setTimeout(()=>{
    galleryPart6.style.setProperty('--transformY', -100);
  },1000)
  setTimeout(()=>{
    initialLoadingContainer.classList.toggle('initialLoadingContainerTransition');
    window.scrollTo(0, 0);
    audio.play();
    audio.volume = 0.5;
    playMusic.style.display = "none";
    prevMusic.style.display = "block";
    songName.style.visibility = "unset";
    artistName.style.visibility = "unset";
    disk.classList.add('diskAnimation');
    body.classList.toggle('active');

    const headerImgContainer = document.querySelector('.headerImgContainer');
    headerImgContainer.style.transform = "scale(calc(1)";
    headerImg.style.filter = "brightness(1)";
    headerImg.style.webkitFilter = "brightness(1)";

  },1100)
  setTimeout(()=>{
    loadingImgClick.classList.remove('pointNone');
  }, 2000)
});

loadingImgClick.addEventListener('mousedown', () => {
  loadingImgClick.classList.add('clicked');
})

loadingImgClick.addEventListener('mouseup', () => {
  loadingImgClick.classList.remove('clicked');
})
loadingImgClick.addEventListener('touchstart', () => {
  loadingImgClick.classList.add('clicked');
})

loadingImgClick.addEventListener('touchend', () => {
  loadingImgClick.classList.remove('clicked');
})

loadingImgClick.addEventListener('mouseover', () => {
  loadingImgClick.classList.add('hover');
  loadingImgP.classList.add('hover');
})

loadingImgClick.addEventListener('mouseleave', () => {
  loadingImgClick.classList.remove('hover');
  loadingImgP.classList.remove('hover');
})

const homeTrigger = document.getElementById('leftMenuHome');
const centerMenuTeam = document.getElementById('centerMenuTeam');
const mapTrigger = document.getElementById('rightMenuMap');
//const contactsTrigger = document.getElementById('contactsTrigger');
const loadingSlides = document.getElementById('loadingSlides');
const headerImg = document.querySelector('.headerImg');

const headerPage = document.querySelector('.headerContainer');
const aboutPage = document.getElementById('about');
const mapPage = document.getElementById('map');

const cxgLogo = document.querySelector('.cxgLogo');
const mapLogo = document.querySelector('.mapLogo');
const japLogo = document.querySelector('.japLogo');

headerPage.style.display = "block";
aboutPage.style.display = "none";
mapPage.style.display = "none";

footerSection.style.display = 'none';

footerSection.style.display = 'none';

homeTrigger.addEventListener('click', () => {
  menuMainContainer.classList.add('pointNone');
  html.style.overflow = 'hidden';

  footerSection.style.display = 'none';

  rightMenuItemImg[0].classList.add('homeTrig');
  rightMenuItemImg[1].classList.add('homeTrig');
  rightMenuItemImg[2].classList.add('homeTrig');
  centerMenuTeam.classList.add('homeTrig');
  leftMenuItemImg[0].classList.add('homeTrig');
  leftMenuItemImg[1].classList.add('homeTrig');
  leftMenuItemImg[2].classList.add('homeTrig');

  setTimeout(function(){
    loadingBG.style.zIndex = '12';
    loadingBG.style.transform = "translateY(0%)";
    menuToggle.click();
    headerImg.style.display = "block";

    aboutPage.style.display = "none";
    mapPage.style.display = "none";
    mintPage.style.display = "none"


    rightMenuItemImg[0].classList.remove('homeTrig');
    rightMenuItemImg[1].classList.remove('homeTrig');
    rightMenuItemImg[2].classList.remove('homeTrig');
    centerMenuTeam.classList.remove('homeTrig');
    leftMenuItemImg[0].classList.remove('homeTrig');
    leftMenuItemImg[1].classList.remove('homeTrig');
    leftMenuItemImg[2].classList.remove('homeTrig');
    menuMainContainer.classList.remove('pointNone');
    onLoad();
  }, 600)

  setTimeout(function(){
    headerPage.style.display = "block";
  }, 1000);
});

leftMenuItemImg[0].addEventListener('mousedown', function(){
  leftMenuItemImg[0].classList.add('clickedAnim');
});
leftMenuItemImg[0].addEventListener('mouseup', function(){
  leftMenuItemImg[0].classList.remove('clickedAnim');
});
leftMenuItemImg[0].addEventListener('touchstart', function(){
  leftMenuItemImg[0].classList.add('clickedAnim');
});
leftMenuItemImg[0].addEventListener('touchend', function(){
  leftMenuItemImg[0].classList.remove('clickedAnim');
});
leftMenuItemImg[0].addEventListener('mouseleave', function(){
  leftMenuItemImg[0].classList.remove('clickedAnim');
});

centerMenuTeam.addEventListener('click', () => {
  menuMainContainer.classList.add('pointNone');
  html.style.overflow = 'unset';
  footerSection.style.display = 'none';

  centerMenuTeam.classList.add('clicked');
  rightMenuItemImg[0].classList.add('teamTrig');
  rightMenuItemImg[1].classList.add('teamTrig');
  rightMenuItemImg[2].classList.add('teamTrig');
  leftMenuItemImg[0].classList.add('teamTrig');
  leftMenuItemImg[1].classList.add('teamTrig');
  leftMenuItemImg[2].classList.add('teamTrig');

  setTimeout(function(){
    loadingBG.style.zIndex = '12';
    loadingBG.style.transform = "translateY(0%)";
    menuToggle.click();

    headerPage.style.display = "none";
    mapPage.style.display = "none";
    mintPage.style.display = "none"

    rightMenuItemImg[0].classList.remove('teamTrig');
    rightMenuItemImg[1].classList.remove('teamTrig');
    rightMenuItemImg[2].classList.remove('teamTrig');
    leftMenuItemImg[0].classList.remove('teamTrig');
    leftMenuItemImg[1].classList.remove('teamTrig');
    leftMenuItemImg[2].classList.remove('teamTrig');
    menuMainContainer.classList.remove('pointNone');
    onLoad();
  }, 600)

  setTimeout(function(){
    centerMenuTeam.classList.remove('active');
    aboutPage.style.display = "block";
  }, 1000);
  
});

centerMenuTeam.addEventListener('mousedown', function(){
  centerMenuTeam.classList.add('clickedAnim');
});

centerMenuTeam.addEventListener('mouseup', function(){
  centerMenuTeam.classList.remove('clickedAnim');
});
centerMenuTeam.addEventListener('touchstart', function(){
  centerMenuTeam.classList.add('clickedAnim');
});

centerMenuTeam.addEventListener('touchend', function(){
  centerMenuTeam.classList.remove('clickedAnim');
});
centerMenuTeam.addEventListener('mouseleave', function(){
  centerMenuTeam.classList.remove('clickedAnim');
});

mapTrigger.addEventListener('click', function(){
  menuMainContainer.classList.add('pointNone');
  html.style.overflow = 'unset';
  footerSection.style.display = 'none';

  rightMenuItemImg[0].classList.add('mapTrig');
  rightMenuItemImg[1].classList.add('mapTrig');
  rightMenuItemImg[2].classList.add('mapTrig');
  centerMenuTeam.classList.add('mapTrig');
  leftMenuItemImg[0].classList.add('mapTrig');
  leftMenuItemImg[1].classList.add('mapTrig');
  leftMenuItemImg[2].classList.add('mapTrig');

  setTimeout(function(){
    loadingBG.style.zIndex = '12';
    loadingBG.style.transform = "translateY(0%)";
    menuToggle.click();

    headerPage.style.display = "none";
    aboutPage.style.display = "none";
    mintPage.style.display = "none"

    rightMenuItemImg[0].classList.remove('mapTrig');
    rightMenuItemImg[1].classList.remove('mapTrig');
    rightMenuItemImg[2].classList.remove('mapTrig');
    leftMenuItemImg[0].classList.remove('mapTrig');
    leftMenuItemImg[1].classList.remove('mapTrig');
    leftMenuItemImg[2].classList.remove('mapTrig');
    centerMenuTeam.classList.remove('mapTrig');
    menuMainContainer.classList.remove('pointNone');
    onLoad();
  }, 600)

  chapProl.classList.remove('animate')
  chap1.classList.remove('animate')
  chap2.classList.remove('animate')

  cxgLogo.classList.remove('animate')
  mapLogo.classList.remove('animate')
  japLogo.classList.remove('animate')

  setTimeout(function(){
    mapPage.style.display = "block";
  }, 1000);

  setTimeout(function(){
    chapProl.classList.add('animate')
    chap1.classList.add('animate')
    chap2.classList.add('animate')

    cxgLogo.classList.add('animate')
    mapLogo.classList.add('animate')
    japLogo.classList.add('animate')
  }, 2500);
})

rightMenuItemImg[2].addEventListener('mousedown', function(){
  rightMenuItemImg[2].classList.add('clickedAnim');
});

rightMenuItemImg[2].addEventListener('mouseup', function(){
  rightMenuItemImg[2].classList.remove('clickedAnim');
});
rightMenuItemImg[2].addEventListener('touchstart', function(){
  rightMenuItemImg[2].classList.add('clickedAnim');
});

rightMenuItemImg[2].addEventListener('touchend', function(){
  rightMenuItemImg[2].classList.remove('clickedAnim');
});
rightMenuItemImg[2].addEventListener('mouseleave', function(){
  rightMenuItemImg[2].classList.remove('clickedAnim');

});

const mapBg = document.querySelector('.mapBgImg');
const mintBg = document.querySelector('.mintBgImg');
const moon = document.querySelector('.moon');
const clouds = document.querySelector('.clouds');

setInterval(function(){

  let hours = {
    timeZone: 'Africa/Accra',
    hour: 'numeric',
    hour12: false
  },
  hrsFormatter = new Intl.DateTimeFormat([], hours);
  const hrs = document.querySelector('.hrs');
  const amPm = document.querySelector('.amPm');

  var utcHour = hrsFormatter.format(new Date()) ;

  if(utcHour == 24 || utcHour == 0){
    amPm.innerHTML = "AM";
    hrs.innerHTML = "12";
  }
  if(utcHour >= 1 && utcHour <= 9){
    hrs.innerHTML = utcHour;
    amPm.innerHTML = "AM";
  }
  if(utcHour >= 10 && utcHour <= 11){
    hrs.innerHTML = utcHour;
    amPm.innerHTML = "AM";
  }
  if(utcHour == 12){
    hrs.innerHTML = utcHour;
    amPm.innerHTML = "PM";
  }
  if(utcHour >= 13 && utcHour <= 23){
    hrs.innerHTML =  "0"+(utcHour-12);
    amPm.innerHTML = "PM";
  }

  if(utcHour==0 || utcHour==24){
    headerImg.src = "/imgs/header/Rednight/rednight.webp";
    mapBg.src = "/imgs/header/Rednight/rednight.webp";
    mintBg.src = "/imgs/header/Rednight/rednight.webp";
    moon.src = "/imgs/header/Rednight/redmoon.png";
    clouds.src = "/imgs/header/Rednight/redcloud.png";
    moon.classList.remove('sun');
    moon.classList.add('moonNight');
  }

  if(utcHour>=1 && utcHour<=4 ){
    headerImg.src = "/imgs/header/Rednight/rednight.webp";
    mapBg.src = "/imgs/header/Rednight/rednight.webp";
    mintBg.src = "/imgs/header/Rednight/rednight.webp";
    moon.src = "/imgs/header/Rednight/redmoon.png";
    clouds.src = "/imgs/header/Rednight/redcloud.png";
    moon.classList.remove('sun');
    moon.classList.add('moonNight');


  }

  if(utcHour>=5 && utcHour<=11){
    headerImg.src = "/imgs/header/Morning/morning.webp";
    mapBg.src = "/imgs/header/Morning/morning.webp";
    mintBg.src = "/imgs/header/Morning/morning.webp";
    moon.src = "/imgs/header/Morning/morningsun.png";
    clouds.src = "/imgs/header/Morning/morningcloud.png";

    moon.classList.add('sun');
    moon.classList.remove('moonNight');
  }

  if(utcHour>=12 && utcHour<=17){
    headerImg.src = "/imgs/header/Sunset/sunset.webp";
    mapBg.src = "/imgs/header/Sunset/sunset.webp";
    mintBg.src = "/imgs/header/Sunset/sunset.webp";
    moon.src = "/imgs/header/Sunset/sunsetsun.png";
    clouds.src = "/imgs/header/Sunset/sunsetcloud.png";

    moon.classList.add('sun');
    moon.classList.remove('moonNight');

  }

  if(utcHour >= 18 && utcHour<=23){
    headerImg.src = "/imgs/header/Night/night.webp";
    mapBg.src = "/imgs/header/Night/night.webp";
    mintBg.src = "/imgs/header/Night/night.webp";
    moon.src = "/imgs/header/Night/nightmoon.png";
    clouds.src = "/imgs/header/Night/nightcloud.png";
    moon.classList.add('moonNight');
    moon.classList.remove('sun');

  }

  let minutes = {
    timeZone: 'Africa/Accra',
    minute: '2-digit',
    hour12: false
  },
  minsFormatter = new Intl.DateTimeFormat([], minutes);
  const mins = document.querySelector('.mins');

  if(minsFormatter.format(new Date())<10){
    mins.innerHTML = "0"  + minsFormatter.format(new Date());
  }
  else{
    mins.innerHTML = minsFormatter.format(new Date());
  }

  let seconds = {
    timeZone: 'Africa/Accra',
    second: '2-digit',
    hour12: false
  },
  secsFormatter = new Intl.DateTimeFormat([], seconds);
  const secs = document.querySelector('.secs');

  secs.innerHTML = secsFormatter.format(new Date());



},1000);

const headerHeadlines = document.querySelector('.headerHeadlines');
const headerNewsP = document.querySelector('.headerNewsP')


let slideNews = 0;

setInterval(function(){
  const headerHeadlinesStyle = getComputedStyle(headerHeadlines);
  const headerHeadLinesWidth = parseFloat(headerHeadlinesStyle.getPropertyValue('width'))
  const headerNewsPStyle = getComputedStyle(headerNewsP);
  const headerNewsPWidth = parseFloat(headerNewsPStyle.getPropertyValue('width'))
  
  if(slideNews <= (headerNewsPWidth*-1)){
    slideNews = headerHeadLinesWidth;
    headerNewsP.style.transform = "translateX(" + slideNews + "px)";
    slideNews -= .5;
  }
  else{
    headerNewsP.style.transform = "translateX(" + slideNews + "px)";
    slideNews -= .5;
  }
}, 5)

const phoneContainer = document.querySelector('.phoneContainer');
phoneContainer.classList.remove('active');
const chatSideBarArrowsContainer = document.querySelector('.chatTrigger');
const chatSideBarContainer = document.querySelector('.chatSideBarContainer');
const phoneArrowLeft = document.querySelector('.phoneArrowLeft');

const headerDC = document.querySelector('.headerDC');
const headerTW = document.querySelector('.headerTW');
const headerManifesto = document.querySelector('.headerManifesto');
const headerAbout = document.querySelector('.headerAbout');

var FaqChatPause = true;


chatSideBarArrowsContainer.addEventListener('click', function(){
  headerDC.classList.add('active')
  headerTW.classList.add('active')
  headerManifesto.classList.add('active')
  headerAbout.classList.add('active')

  patchLogoSide.classList.add('active')

  headerFaqTitleImg.classList.add('hide');

  phoneContainer.classList.toggle('active');
  chatSideBarContainer.classList.add('focus');
  phoneArrowLeft.classList.add('active');
  headerHeadlines.classList.add('active');
  headerSneakPeeksGallery.classList.add('active');

  audioContainer3.classList.remove('active');
  musicOpen.classList.add('active');
  arrowMusicL.classList.add('active');

  FaqChatPause = false;
  for(let i = 0; i < closeTrigger.length; i++){
    closeTrigger[i].classList.remove('active');
    headerPeekImg[i].classList.remove('active');
    headerSneakPeeksReveal.classList.remove('active');
  }
})
        


const chatContainer = document.querySelector('.chatContainer');
const headerAboutImg1 = document.querySelector('.headerAboutImg1');
const headerAboutImg2 = document.querySelector('.headerAboutImg2');
const headerManifestoImg1 = document.querySelector('.headerManifestoImg1');
const headerManifestoImg2 = document.querySelector('.headerManifestoImg2');
const headerTwitterImg1 = document.querySelector('.headerTwitterImg1');
const headerDiscordImg1 = document.querySelector('.headerDiscordImg1');

const headerAboutCard = document.querySelector('.headerAboutCard')
const headerManifestoCard = document.querySelector('.headerManifestoCard')

const phoneBlackBg = document.querySelector('.phoneBlackBg')
const phoneScreen = document.querySelector('.phoneScreen')

let aboutCardScroll = false;
let manifestoCardScroll = false;

headerAboutImg1.addEventListener('click', function(){
  headerManifestoCard.scrollTop = 0;
  headerAboutCard.scrollTop = 0;

  aboutCardScroll = !aboutCardScroll;

  headerAboutCard.classList.toggle('active');
  headerAboutImg1.classList.toggle('aboutActive');

  phoneContainer.classList.toggle('aboutActive');
  headerManifestoImg1.classList.toggle('aboutActive');
  headerTwitterImg1.classList.toggle('aboutActive');
  headerDiscordImg1.classList.toggle('aboutActive');
})
headerAboutImg2.addEventListener('click', function(){
  headerManifestoImg2.classList.toggle('pointNone');

  headerAboutCard.classList.add('aboutActive2');
  headerManifestoCard.classList.remove('aboutActive2');

  phoneContainer.classList.toggle('aboutActive2');
  phoneBlackBg.classList.toggle('active');
  phoneScreen.classList.toggle('active');
  phoneHomeButton.classList.toggle('active');
})
headerManifestoImg1.addEventListener('click', function(){
  headerAboutCard.scrollTop = 0;
  headerManifestoCard.scrollTop = 0;

  manifestoCardScroll = !manifestoCardScroll;

  headerManifestoCard.classList.toggle('active');
  headerManifestoImg1.classList.toggle('manifestoActive');

  phoneContainer.classList.toggle('aboutActive');
  headerAboutImg1.classList.toggle('manifestoActive');
  headerTwitterImg1.classList.toggle('aboutActive');
  headerDiscordImg1.classList.toggle('aboutActive');
})
headerManifestoImg2.addEventListener('click', function(){
  headerAboutImg2.classList.toggle('pointNone');

  headerManifestoCard.classList.add('aboutActive2');
  headerAboutCard.classList.remove('aboutActive2');

  phoneContainer.classList.toggle('aboutActive2');
  phoneBlackBg.classList.toggle('active');
  phoneScreen.classList.toggle('active');
  phoneHomeButton.classList.toggle('active');
})


setInterval(function(){
  if(aboutCardScroll){
    headerAboutCard.scrollBy(0, 2);
  }
  if(manifestoCardScroll){
    headerManifestoCard.scrollBy(0, 2);
  }
}, 500)

headerAboutCard.addEventListener('touchmove', () => {aboutCardScroll = false;});
headerAboutCard.addEventListener('touchstart', () => {aboutCardScroll = false});
headerAboutCard.addEventListener('touchend', () => {aboutCardScroll = true;});
$(".headerAboutCard").hover(function () {aboutCardScroll = false;},function () {aboutCardScroll = true;});

headerManifestoCard.addEventListener('touchmove', () => {manifestoCardScroll = false;});
headerManifestoCard.addEventListener('touchstart', () => {manifestoCardScroll = false});
headerManifestoCard.addEventListener('touchend', () => {manifestoCardScroll = true;});
$(".headerManifestoCard").hover(function () {manifestoCardScroll = false;},function () {manifestoCardScroll = true;});

/*
chatContainer.addEventListener('click', function(){
  phoneChatContainer.scrollTop = 0;
  headerFaqTitleImg.classList.remove('hide');
  headerSneakPeeksGallery.classList.remove('active');
  phoneContainer.classList.remove('active');
  chatSideBarContainer.classList.remove('active');
  phoneArrowLeft.classList.remove('active');
  headerHeadlines.classList.remove('active');

  musicOpen.classList.remove('active');
  arrowMusicL.classList.remove('active');
  FaqChatPause = false;
  for(let i = 0; i < closeTrigger.length; i++){
    closeTrigger[i].classList.remove('active');
    headerPeekImg[i].classList.remove('active');
    headerSneakPeeksReveal.classList.remove('active');
  }
})


phoneContainer.addEventListener('click', function(){
  phoneChatContainer.scrollTop = 0;
  headerFaqTitleImg.classList.remove('hide');
  headerSneakPeeksGallery.classList.remove('active');
  phoneContainer.classList.remove('active');
  chatSideBarContainer.classList.remove('active');
  phoneArrowLeft.classList.remove('active');
  headerHeadlines.classList.remove('active');

  musicOpen.classList.remove('active');
  arrowMusicL.classList.remove('active');
  FaqChatPause = false;
  for(let i = 0; i < closeTrigger.length; i++){
    closeTrigger[i].classList.remove('active');
    headerPeekImg[i].classList.remove('active');
    headerSneakPeeksReveal.classList.remove('active');
  }
})*/

phoneArrowLeft.addEventListener('click', function(){
  headerDC.classList.remove('active')
  headerTW.classList.remove('active')
  headerManifesto.classList.remove('active')
  headerAbout.classList.remove('active')

  patchLogoSide.classList.remove('active')


  headerAboutCard.classList.remove('active');
  headerAboutImg1.classList.remove('aboutActive');
  phoneContainer.classList.remove('aboutActive');
  headerManifestoImg1.classList.remove('aboutActive');
  headerTwitterImg1.classList.remove('aboutActive');
  headerDiscordImg1.classList.remove('aboutActive');

  headerManifestoCard.classList.remove('active');
  headerManifestoImg1.classList.remove('manifestoActive');
  phoneContainer.classList.remove('aboutActive');
  headerAboutImg1.classList.remove('manifestoActive');
  headerTwitterImg1.classList.remove('aboutActive');
  headerDiscordImg1.classList.remove('aboutActive');

  phoneChatContainer.scrollTop = 0;
  FaqChatPause = true;
  headerFaqTitleImg.classList.remove('hide');
  headerSneakPeeksGallery.classList.remove('active');
  phoneContainer.classList.remove('active');
  phoneContainer.classList.remove('aboutActive');
  chatSideBarContainer.classList.remove('focus');
  phoneArrowLeft.classList.remove('active');
  headerHeadlines.classList.remove('active');

  musicOpen.classList.remove('active');
  arrowMusicL.classList.remove('active');
})

const phoneHomeButton = document.querySelector('.phoneHomeButton');

phoneHomeButton.addEventListener('click', function(){
  phoneArrowLeft.click();
})


const phoneChatContainer = document.querySelector('.phoneChatContainer');


phoneChatContainer.addEventListener('touchmove', () => {FaqChatPause = true;});
phoneChatContainer.addEventListener('touchstart', () => {FaqChatPause = true});
phoneChatContainer.addEventListener('touchend', () => {FaqChatPause = false;});
$(".phoneChatContainer").hover(function () {FaqChatPause = true;},function () {FaqChatPause = false;});


setInterval(function(){
  if(!FaqChatPause){
    phoneChatContainer.scrollBy(0, 2);
  }
}, 30)



const headerPeekImg = document.querySelectorAll('.headerPeekImg');
let headerPeekGalleryImgs = [
{
  path: "/imgs/header/sneakPeeks/yasha.webp"
},
{
  path: "/imgs/header/sneakPeeks/yui.webp"
},
{
  path: "/imgs/header/sneakPeeks/iino.webp"
},
{
  path: "/imgs/header/sneakPeeks/yukihiro.webp"
},
{
  path: "/imgs/header/sneakPeeks/rai.webp"
},
{
  path: "/imgs/header/sneakPeeks/touya.webp"
},
]

const revealImg = document.querySelector('.revealImg');
const closeTrigger = document.querySelectorAll('.closeTrigger');
const headerSneakPeeksReveal = document.querySelector('.headerSneakPeeksReveal');
const headerPeek = document.querySelectorAll('.headerPeek');
const redLine = document.querySelectorAll('.redLine');
const headerSneakPeeksGallery = document.querySelector('.headerSneakPeeksGallery');
const charName = document.querySelector('.charName')
const clan = document.querySelector('.clan');
const sneakInfo = document.querySelector('.sneakInfo');
const revealDialogueCard = document.querySelector('.revealDialogueCard');
const revealDialogueGIFCard = document.querySelector('.revealDialogueGIFCard');
const revealDialogueGIF = document.querySelector('.revealDialogueGIF')
const peekBio = document.querySelector('.peekBio')

let peekInfo = [
  {
    //yashaInfo
    name: "YASHA",
    skillIntro: "A CXGNUS who is contracted to the demon.",

    skill1: "Empress of Darkness",
    skill1d: "Allows the user to transform into their dark form enhancing their physical and magic capabilities.",

    skill2: "Demon’s Touch",
    skill2d: "Enables the user to turn anything they touch into a cursed weapon.",

    skill3: "Demon Affinity",
    skill3d: "User calls on Cursed Spirits when injured for healing. Cursed Spirits cannot be used for offensive attacks.",

    oskill1: "Drift",
    oskill2: "Inhuman Instinct and Strength",
    oskill3: " Master Swordsman/Spear/Blades/Scythe"
  },
  {
    //yuiInfo
    name: "YUI",
    skillIntro: "A CXGNUS who specializes in fighting with her self-invented technology.",


    skill1: "Mech Urbane",
    skill1d: "User is talented in creating many different pieces of equipment and weapons to aid them in battle with any material available in any situation.",

    skill2: "Ease Tempo",
    skill2d: "User has maximum mastery of different kinds of guns and machinery for assault.",

    oskill1: "High Intellect",
    oskill2: "Adaptability",
    oskill3: "Stealth"
  },
  {
    //iinoInfo
    name: "IINO",
    skillIntro: "A CXGNUS who specializes in spirit manipulation.",

    skill1: "Enlightened One",
    skill1d: "The user has a high affinity with spirits and has a contract between them. This ability also makes the user unaffected by status ailments.",

    skill2: "Divine Salvation",
    skill2d: "Allows the user to contact spirits they have contracts with and use them for battle. The user can afford a variety of specialties that range from offense to support. ",

    oskill1: "High Intellectual",
    oskill2: "Spirit Communicator"
  },
  {
    //yukihiro
    name: "YUKIHIRO",
    skillIntro: "A CXGNUS who specializes in ice manipulation.",


    skill1: "Icy Torrent",
    skill1d: "Allows the user to produce and manipulate water and ice. Can increase volume of his attacks.",

    skill2: "Absolute Zero",
    skill2d: "Enables user to freeze things and opponents to absolute zero temperatures causing targets to crumble to pieces under their own weight quickly.",

    oskill1: "Master combatant",
    oskill2: "Keen intellect"
  },
  {
    //rai
    name: "RAI",
    skillIntro: "A CXGNUS who specializes in electricity manipulation.",


    skill1: "Electric Charge",
    skill1d: "Allows the user to produce and manipulate electricity.",

    skill2: "Maxima Volt",
    skill2d: "User’s body is filled with electricity, increasing their speed to a maximum speed of lightning and creating a force around the user’s body for defense.",

    oskill1: "Expert skater",
    oskill2: "Inhuman stamina",
    oskill3: "Lightning legs"
  },
  {
    //touya
    name: "TOUYA",
    skillIntro: "A CXGNUS who specializes in fire manipulation.",


    skill1: "Blazing Flames",
    skill1d: "Allows the user to produce and manipulate flames.",

    skill2: "Hot Hands",
    skill2d: "Enables the user to raise their fire to a maximum temperature, turning their flames into blue that enhances the user’s physical prowess.",

    oskill1: "Inhuman Strength/Combat",
    oskill2: "Good battle instincts"
  }
]

const abIntro = document.querySelector('.abIntro')

const spSkill = document.querySelectorAll('.spSkill')
const skillD = document.querySelectorAll('.skillD')

const otSD = document.querySelectorAll('.otSD')

headerPeekImg[0].src = headerPeekGalleryImgs[0].path;
headerPeekImg[1].src = headerPeekGalleryImgs[1].path;
headerPeekImg[2].src = headerPeekGalleryImgs[2].path;
headerPeekImg[3].src = headerPeekGalleryImgs[3].path;
headerPeekImg[4].src = headerPeekGalleryImgs[4].path;
headerPeekImg[5].src = headerPeekGalleryImgs[5].path;

headerPeekImg[0].addEventListener('click', function(){
  //yasha

  charName.innerHTML = peekInfo[0].name;
  charName.style.fontSize = "24px";
  revealImg.src = headerPeekGalleryImgs[0].path;

  abIntro.innerHTML = peekInfo[0].skillIntro;
  spSkill[0].style.display = "unset";
  spSkill[0].innerHTML = peekInfo[0].skill1;
  spSkill[1].style.display = "unset";
  spSkill[1].innerHTML = peekInfo[0].skill2;
  spSkill[2].style.display = "unset";
  spSkill[2].innerHTML = peekInfo[0].skill3;
  spSkill[3].style.display = "none";

  skillD[0].style.display = "unset";
  skillD[0].innerHTML = peekInfo[0].skill1d;
  skillD[1].style.display = "unset";
  skillD[1].innerHTML = peekInfo[0].skill2d;
  skillD[2].style.display = "unset";
  skillD[2].innerHTML = peekInfo[0].skill3d;
  skillD[3].style.display = "none";

  otSD[0].style.display = "unset";
  otSD[0].innerHTML = peekInfo[0].oskill1;
  otSD[1].style.display = "unset";
  otSD[1].innerHTML = peekInfo[0].oskill2;
  otSD[2].style.display = "unset";
  otSD[2].innerHTML = peekInfo[0].oskill3;
  otSD[3].style.display = "none";
  otSD[4].style.display = "none";

  closeTrigger[0].classList.add('active');
  closeTrigger[1].classList.remove('active');
  closeTrigger[2].classList.remove('active');
  closeTrigger[3].classList.remove('active');
  closeTrigger[4].classList.remove('active');
  closeTrigger[5].classList.remove('active');

  headerPeekImg[0].classList.add('active');
  headerPeekImg[1].classList.remove('active');
  headerPeekImg[2].classList.remove('active');
  headerPeekImg[3].classList.remove('active');
  headerPeekImg[4].classList.remove('active');
  headerPeekImg[5].classList.remove('active');

  headerPeek[0].style.width = "70px";
  headerPeek[0].classList.add('focus')
  headerPeek[1].style.width = "30px";
  headerPeek[1].classList.remove('focus')
  headerPeek[2].style.width = "30px";
  headerPeek[2].classList.remove('focus')
  headerPeek[3].style.width = "30px";
  headerPeek[3].classList.remove('focus')
  headerPeek[4].style.width = "30px";
  headerPeek[4].classList.remove('focus')
  headerPeek[5].style.width = "30px";
  headerPeek[5].classList.remove('focus')

  redLine[0].classList.add('active');
  redLine[1].classList.remove('active');
  redLine[2].classList.remove('active');
  redLine[3].classList.remove('active');
  redLine[4].classList.remove('active');
  redLine[5].classList.remove('active');

  sneakInfo.style.opacity = "100%";

  musicOpen.classList.add('active');
  headerFaqTitleImg.classList.add('hide')
  phoneContainer.classList.remove('active');
  chatSideBarContainer.classList.add('active');
  phoneArrowLeft.classList.remove('active');
  headerHeadlines.classList.remove('active');
  headerSneakPeeksReveal.classList.add('active');
  patchLogoSide.classList.add('active')

  revealDialogueGIF.src = "/imgs/header/sneakPeeks/yasha.gif"

  clan.classList.add('borderAnim');
  setTimeout(function(){
    clan.classList.remove('borderAnim');
  }, 300)

  revealImg.classList.add("picAnim")
  setTimeout(function(){
    revealImg.classList.remove("picAnim")
  }, 500)
  
  setTimeout(function(){
    revealDialogueCard.classList.add('animate')
    revealDialogueGIFCard.classList.add('animate')
  }, 1000)
})
headerPeekImg[1].addEventListener('click', function(){
  //yui
  charName.innerHTML = peekInfo[1].name;
  revealImg.src = headerPeekGalleryImgs[1].path;
  charName.style.fontSize = "24px";

  abIntro.innerHTML = peekInfo[1].skillIntro;
  spSkill[0].style.display = "unset";
  spSkill[0].innerHTML = peekInfo[1].skill1;
  spSkill[1].style.display = "unset";
  spSkill[1].innerHTML = peekInfo[1].skill2;
  spSkill[2].style.display = "none";
  spSkill[3].style.display = "none";

  skillD[0].style.display = "unset";
  skillD[0].innerHTML = peekInfo[1].skill1d;
  skillD[1].style.display = "unset";
  skillD[1].innerHTML = peekInfo[1].skill2d;
  skillD[2].style.display = "none";
  skillD[3].style.display = "none";

  otSD[0].style.display = "unset";
  otSD[0].innerHTML = peekInfo[1].oskill1;
  otSD[1].style.display = "unset";
  otSD[1].innerHTML = peekInfo[1].oskill2;
  otSD[2].style.display = "unset";
  otSD[2].innerHTML = peekInfo[1].oskill3;

  otSD[3].style.display = "none";
  otSD[4].style.display = "none";

  closeTrigger[0].classList.remove('active');
  closeTrigger[1].classList.add('active');
  closeTrigger[2].classList.remove('active');
  closeTrigger[3].classList.remove('active');
  closeTrigger[4].classList.remove('active');
  closeTrigger[5].classList.remove('active');

  headerPeekImg[0].classList.remove('active');
  headerPeekImg[1].classList.add('active');
  headerPeekImg[2].classList.remove('active');
  headerPeekImg[3].classList.remove('active');
  headerPeekImg[4].classList.remove('active');
  headerPeekImg[5].classList.remove('active');

  headerPeek[0].style.width = "30px";
  headerPeek[0].classList.remove('focus')
  headerPeek[1].style.width = "70px";
  headerPeek[1].classList.add('focus')
  headerPeek[2].style.width = "30px";
  headerPeek[2].classList.remove('focus')
  headerPeek[3].style.width = "30px";
  headerPeek[3].classList.remove('focus')
  headerPeek[4].style.width = "30px";
  headerPeek[4].classList.remove('focus')
  headerPeek[5].style.width = "30px";
  headerPeek[5].classList.remove('focus')

  redLine[0].classList.remove('active');
  redLine[1].classList.add('active');
  redLine[2].classList.remove('active');
  redLine[3].classList.remove('active');
  redLine[4].classList.remove('active');
  redLine[5].classList.remove('active');

  sneakInfo.style.opacity = "100%";
 
  musicOpen.classList.add('active');
  headerFaqTitleImg.classList.add('hide')
  phoneContainer.classList.remove('active');
  chatSideBarContainer.classList.add('active');
  phoneArrowLeft.classList.remove('active');
  headerHeadlines.classList.remove('active');
  headerSneakPeeksReveal.classList.add('active');
  patchLogoSide.classList.add('active')
  
  clan.classList.add('borderAnim');
  setTimeout(function(){
    clan.classList.remove('borderAnim');
  }, 300)

  revealImg.classList.add("picAnim")
  setTimeout(function(){
    revealImg.classList.remove("picAnim")
    }, 500)
  
  revealDialogueGIF.src = "/imgs/header/sneakPeeks/yui.gif"
  setTimeout(function(){
    revealDialogueCard.classList.add('animate')
    revealDialogueGIFCard.classList.add('animate')
  }, 1000)
})
headerPeekImg[2].addEventListener('click', function(){
//iino

  revealImg.src = headerPeekGalleryImgs[2].path;
  charName.innerHTML = peekInfo[2].name;
  charName.style.fontSize = "24px";

  abIntro.innerHTML = peekInfo[2].skillIntro;
  spSkill[0].style.display = "unset";
  spSkill[0].innerHTML = peekInfo[2].skill1;
  spSkill[1].style.display = "unset";
  spSkill[1].innerHTML = peekInfo[2].skill2;
  spSkill[2].style.display = "none";
  spSkill[3].style.display = "none";

  skillD[0].style.display = "unset";
  skillD[0].innerHTML = peekInfo[2].skill1d;
  skillD[1].style.display = "unset";
  skillD[1].innerHTML = peekInfo[2].skill2d;
  skillD[2].style.display = "none";
  skillD[3].style.display = "none";

  otSD[0].style.display = "unset";
  otSD[0].innerHTML = peekInfo[2].oskill1;
  otSD[1].style.display = "unset";
  otSD[1].innerHTML = peekInfo[2].oskill2;
  otSD[2].style.display = "none";
  otSD[3].style.display = "none";
  otSD[4].style.display = "none";

  closeTrigger[0].classList.remove('active');
  closeTrigger[1].classList.remove('active');
  closeTrigger[2].classList.add('active');
  closeTrigger[3].classList.remove('active');
  closeTrigger[4].classList.remove('active');
  closeTrigger[5].classList.remove('active');

  headerPeekImg[0].classList.remove('active');
  headerPeekImg[1].classList.remove('active');
  headerPeekImg[2].classList.add('active');
  headerPeekImg[3].classList.remove('active');
  headerPeekImg[4].classList.remove('active');
  headerPeekImg[5].classList.remove('active');

  headerPeek[0].style.width = "30px";
  headerPeek[0].classList.remove('focus')
  headerPeek[1].style.width = "30px";
  headerPeek[1].classList.remove('focus')
  headerPeek[2].style.width = "70px";
  headerPeek[2].classList.add('focus')
  headerPeek[3].style.width = "30px";
  headerPeek[3].classList.remove('focus')
  headerPeek[4].style.width = "30px";
  headerPeek[4].classList.remove('focus')
  headerPeek[5].style.width = "30px";
  headerPeek[5].classList.remove('focus')

  redLine[0].classList.remove('active');
  redLine[1].classList.remove('active');
  redLine[2].classList.add('active');
  redLine[3].classList.remove('active');
  redLine[4].classList.remove('active');
  redLine[5].classList.remove('active');

  sneakInfo.style.opacity = "100%";

  musicOpen.classList.add('active');
  headerFaqTitleImg.classList.add('hide')
  phoneContainer.classList.remove('active');
  chatSideBarContainer.classList.add('active');
  phoneArrowLeft.classList.remove('active');
  headerHeadlines.classList.remove('active');
  headerSneakPeeksReveal.classList.add('active');
  patchLogoSide.classList.add('active')

  clan.classList.add('borderAnim');
  setTimeout(function(){
    clan.classList.remove('borderAnim');
  }, 300)

  revealImg.classList.add("picAnim")
  setTimeout(function(){
  revealImg.classList.remove("picAnim")
  }, 500)

  revealDialogueGIF.src = "/imgs/header/sneakPeeks/iino.gif"
  setTimeout(function(){
    revealDialogueCard.classList.add('animate')
    revealDialogueGIFCard.classList.add('animate')
  }, 1000)
})
headerPeekImg[3].addEventListener('click', function(){
//yukihiro

  charName.innerHTML = peekInfo[3].name;
  charName.style.fontSize = "16px";
  revealImg.src = headerPeekGalleryImgs[3].path;

  abIntro.innerHTML = peekInfo[3].skillIntro;
  spSkill[0].style.display = "unset";
  spSkill[0].innerHTML = peekInfo[3].skill1;
  spSkill[1].style.display = "unset";
  spSkill[1].innerHTML = peekInfo[3].skill2;
  spSkill[2].style.display = "none";
  spSkill[3].style.display = "none";

  skillD[0].style.display = "unset";
  skillD[0].innerHTML = peekInfo[3].skill1d;
  skillD[1].style.display = "unset";
  skillD[1].innerHTML = peekInfo[3].skill2d;
  skillD[2].style.display = "none";
  skillD[3].style.display = "none";

  otSD[0].style.display = "unset";
  otSD[0].innerHTML = peekInfo[3].oskill1;
  otSD[1].style.display = "unset";
  otSD[1].innerHTML = peekInfo[3].oskill2;
  otSD[2].style.display = "none";
  otSD[3].style.display = "none";
  otSD[4].style.display = "none";

  headerPeekImg[0].classList.remove('active');
  headerPeekImg[1].classList.remove('active');
  headerPeekImg[2].classList.remove('active');
  headerPeekImg[3].classList.add('active');
  headerPeekImg[4].classList.remove('active');
  headerPeekImg[5].classList.remove('active');

  closeTrigger[0].classList.remove('active');
  closeTrigger[1].classList.remove('active');
  closeTrigger[2].classList.remove('active');
  closeTrigger[3].classList.add('active');
  closeTrigger[4].classList.remove('active');
  closeTrigger[5].classList.remove('active');

  headerPeek[0].style.width = "30px";
  headerPeek[0].classList.remove('focus')
  headerPeek[1].style.width = "30px";
  headerPeek[1].classList.remove('focus')
  headerPeek[2].style.width = "30px";
  headerPeek[2].classList.remove('focus')
  headerPeek[3].style.width = "70px";
  headerPeek[3].classList.add('focus')
  headerPeek[4].style.width = "30px";
  headerPeek[4].classList.remove('focus')
  headerPeek[5].style.width = "30px";
  headerPeek[5].classList.remove('focus')

  redLine[0].classList.remove('active');
  redLine[1].classList.remove('active');
  redLine[2].classList.remove('active');
  redLine[3].classList.add('active');
  redLine[4].classList.remove('active');
  redLine[5].classList.remove('active');

  sneakInfo.style.opacity = "100%";
  
  musicOpen.classList.add('active');
  headerFaqTitleImg.classList.add('hide')
  phoneContainer.classList.remove('active');
  chatSideBarContainer.classList.add('active');
  phoneArrowLeft.classList.remove('active');
  headerHeadlines.classList.remove('active');
  headerSneakPeeksReveal.classList.add('active');
  patchLogoSide.classList.add('active')
 
  clan.classList.add('borderAnim');
  setTimeout(function(){
    clan.classList.remove('borderAnim');
  }, 300)

  revealImg.classList.add("picAnim")
  setTimeout(function(){
  revealImg.classList.remove("picAnim")
  }, 500)

  revealDialogueGIF.src = "/imgs/header/sneakPeeks/yukihiro.gif"
  setTimeout(function(){
    revealDialogueCard.classList.add('animate')
    revealDialogueGIFCard.classList.add('animate')
  }, 1000)
})
headerPeekImg[4].addEventListener('click', function(){
//rai

  charName.innerHTML = peekInfo[4].name;
  charName.style.fontSize = "24px";
  revealImg.src = headerPeekGalleryImgs[4].path;

  abIntro.innerHTML = peekInfo[4].skillIntro;
  spSkill[0].style.display = "unset";
  spSkill[0].innerHTML = peekInfo[4].skill1;
  spSkill[1].style.display = "unset";
  spSkill[1].innerHTML = peekInfo[4].skill2;
  spSkill[2].style.display = "none";
  spSkill[3].style.display = "none";

  skillD[0].style.display = "unset";
  skillD[0].innerHTML = peekInfo[4].skill1d;
  skillD[1].style.display = "unset";
  skillD[1].innerHTML = peekInfo[4].skill2d;
  skillD[2].style.display = "none";
  skillD[3].style.display = "none";

  otSD[0].style.display = "unset";
  otSD[0].innerHTML = peekInfo[4].oskill1;
  otSD[1].style.display = "unset";
  otSD[1].innerHTML = peekInfo[4].oskill2;
  otSD[2].style.display = "unset";
  otSD[2].innerHTML = peekInfo[4].oskill3;
  otSD[3].style.display = "none";
  otSD[4].style.display = "none";

  headerPeekImg[0].classList.remove('active');
  headerPeekImg[1].classList.remove('active');
  headerPeekImg[2].classList.remove('active');
  headerPeekImg[3].classList.remove('active');
  headerPeekImg[4].classList.add('active');
  headerPeekImg[5].classList.remove('active');

  closeTrigger[0].classList.remove('active');
  closeTrigger[1].classList.remove('active');
  closeTrigger[2].classList.remove('active');
  closeTrigger[3].classList.remove('active');
  closeTrigger[4].classList.add('active');
  closeTrigger[5].classList.remove('active');

  headerPeek[0].style.width = "30px";
  headerPeek[0].classList.remove('focus')
  headerPeek[1].style.width = "30px";
  headerPeek[1].classList.remove('focus')
  headerPeek[2].style.width = "30px";
  headerPeek[2].classList.remove('focus')
  headerPeek[3].style.width = "30px";
  headerPeek[3].classList.remove('focus')
  headerPeek[4].style.width = "70px";
  headerPeek[4].classList.add('focus')
  headerPeek[5].style.width = "30px";
  headerPeek[5].classList.remove('focus')

  redLine[0].classList.remove('active');
  redLine[1].classList.remove('active');
  redLine[2].classList.remove('active');
  redLine[3].classList.remove('active');
  redLine[4].classList.add('active');
  redLine[5].classList.remove('active');

  sneakInfo.style.opacity = "100%";
  
  musicOpen.classList.add('active');
  headerFaqTitleImg.classList.add('hide')
  phoneContainer.classList.remove('active');
  chatSideBarContainer.classList.add('active');
  phoneArrowLeft.classList.remove('active');
  headerHeadlines.classList.remove('active');
  headerSneakPeeksReveal.classList.add('active');
  patchLogoSide.classList.add('active')

  clan.classList.add('borderAnim');
  setTimeout(function(){
    clan.classList.remove('borderAnim');
  }, 300)

  revealImg.classList.add("picAnim")
  setTimeout(function(){
  revealImg.classList.remove("picAnim")
  }, 500)

  revealDialogueGIF.src = "/imgs/header/sneakPeeks/rai.gif"
  setTimeout(function(){
    revealDialogueCard.classList.add('animate')
    revealDialogueGIFCard.classList.add('animate')
  }, 1000)
})
headerPeekImg[5].addEventListener('click', function(){
//touya

  revealImg.src = headerPeekGalleryImgs[5].path;
  charName.innerHTML = peekInfo[5].name;
  charName.style.fontSize = "22px";


  abIntro.innerHTML = peekInfo[5].skillIntro;
  spSkill[0].style.display = "unset";
  spSkill[0].innerHTML = peekInfo[5].skill1;
  spSkill[1].style.display = "unset";
  spSkill[1].innerHTML = peekInfo[5].skill2;
  spSkill[2].style.display = "none";
  spSkill[3].style.display = "none";

  skillD[0].style.display = "unset";
  skillD[0].innerHTML = peekInfo[5].skill1d;
  skillD[1].style.display = "unset";
  skillD[1].innerHTML = peekInfo[5].skill2d;
  skillD[2].style.display = "none";
  skillD[3].style.display = "none";

  otSD[0].style.display = "unset";
  otSD[0].innerHTML = peekInfo[5].oskill1;
  otSD[1].style.display = "unset";
  otSD[1].innerHTML = peekInfo[5].oskill2;
  otSD[2].style.display = "none";
  otSD[3].style.display = "none";
  otSD[4].style.display = "none";
  
  closeTrigger[0].classList.remove('active');
  closeTrigger[1].classList.remove('active');
  closeTrigger[2].classList.remove('active');
  closeTrigger[3].classList.remove('active');
  closeTrigger[4].classList.remove('active');
  closeTrigger[5].classList.add('active');

  headerPeekImg[0].classList.remove('active');
  headerPeekImg[1].classList.remove('active');
  headerPeekImg[2].classList.remove('active');
  headerPeekImg[3].classList.remove('active');
  headerPeekImg[4].classList.remove('active');
  headerPeekImg[5].classList.add('active');

  headerPeek[0].style.width = "30px";
  headerPeek[0].classList.remove('focus')
  headerPeek[1].style.width = "30px";
  headerPeek[1].classList.remove('focus')
  headerPeek[2].style.width = "30px";
  headerPeek[2].classList.remove('focus')
  headerPeek[3].style.width = "30px";
  headerPeek[3].classList.remove('focus')
  headerPeek[4].style.width = "30px";
  headerPeek[4].classList.remove('focus')
  headerPeek[5].style.width = "70px";
  headerPeek[5].classList.add('focus')

  redLine[0].classList.remove('active');
  redLine[1].classList.remove('active');
  redLine[2].classList.remove('active');
  redLine[3].classList.remove('active');
  redLine[4].classList.remove('active');
  redLine[5].classList.add('active');

  sneakInfo.style.opacity = "100%";

  musicOpen.classList.add('active');
  headerFaqTitleImg.classList.add('hide')
  phoneContainer.classList.remove('active');
  chatSideBarContainer.classList.add('active');
  phoneArrowLeft.classList.remove('active');
  headerHeadlines.classList.remove('active');
  headerSneakPeeksReveal.classList.add('active');
  patchLogoSide.classList.add('active')

  clan.classList.add('borderAnim');
  setTimeout(function(){
    clan.classList.remove('borderAnim');
  }, 300)

  revealImg.classList.add("picAnim")
  setTimeout(function(){
  revealImg.classList.remove("picAnim")
  }, 500)

  revealDialogueGIF.src = "/imgs/header/sneakPeeks/touya.gif"
  setTimeout(function(){
    revealDialogueCard.classList.add('animate')
    revealDialogueGIFCard.classList.add('animate')
  }, 1000)
})

for(let i = 0; i < closeTrigger.length; i++){
    closeTrigger[i].addEventListener('click', function(){
      musicOpen.classList.remove('active');
      headerFaqTitleImg.classList.remove('hide')
      redLine[i].classList.remove('active');
      headerPeek[i].style.width = "30px";
      chatSideBarContainer.classList.remove('active');
      closeTrigger[i].classList.remove('active');
      headerPeekImg[i].classList.remove('active');
      headerSneakPeeksReveal.classList.remove('active');
      revealDialogueGIFCard.classList.remove('animate')
      revealDialogueCard.classList.remove('animate')
      headerPeek[i].classList.remove('focus')
      headerPeek[i].classList.remove('hover')
      patchLogoSide.classList.remove('active')

  });


  headerPeek[i].addEventListener('mouseover', function(){
    headerPeek[i].classList.add('hover')
  })
  headerPeek[i].addEventListener('mouseleave', function(){
    headerPeek[i].classList.remove('hover')
  })
}

const headerFaqTitleImg = document.querySelector('.headerFaqTitleImg');
const headerFaqCard = document.querySelector('.headerFaqCard');
const headerFaqExit = document.querySelector('.headerFaqExit');
let headerFaqIndex =  0;
let faq = [
  {
    num: "1/7",
    question: "What is CXGNUS?",
    message:
      "CXGNUS is a story-driven project of a collection of superhumans that saves humanity from the Other Side. Inspired by the lore and art style of Japanese anime and video games, combined with our love for streetwear fashion, CXGNUS aims to ignite a new age of storytelling and establish a brand in the web2 & web3 space.<br> <br>",
  },
  {
    num: "2/7",
    question: "What are ESPers?",
    message:
      "ESPers are individuals who are born with extra-sensory perception and supernatural powers, and who have yet to discover their power’s full capability through the CXGNUS Academy. <br> <br>",
  },
  {
    num: "3/7",
    question: "What is the total supply?",
    message:
      "The total supply of CXGNUS consists of 5,000 randomly generated ESPers comprised of different personalities, traits, and powers.<br> <br>",
  },
  {
    num: "4/7",
    question: "What is the Chain and Contract used for the project?",
    message: "The chain is Ethereum with the contract of ERC-721. <br> <br>",
  },
  {
    num: "5/7",
    question: "What is the “Noboru List”?",
    message:
      "The Noboru List is our whitelist role. It is a role that is awarded to the members of the community we are building with CXGNUS. The name of our whitelist is inspired by the Japanese word “Noboru (のぼる)”, which means ascend or rise. <br> <br>",
  },
  {
    num: "6/7",
    question: "When is the mint date?",
    message:
      "There is no official mint date yet, keep an eye out on our Twitter and Discord for announcements! <br> <br>",
  },
  {
    num: "7/7",
    question: "How does staking your CXGNUS NFT work?",
    message: "More details about staking will be released soon! <br> <br>",
  },
];
const headerFaqTitle = document.querySelector('.headerFaqTitle'), headerFaqNum = document.querySelector('.headerFaqNum'), headerFaqContent = document.querySelector('.headerFaqContentP');
headerFaqContent.innerHTML = faq[0].message;
  headerFaqNum.innerHTML = faq[0].num;
  headerFaqTitle.innerHTML = faq[0].question;
const headerFaqRedLineContent = document.querySelector('.headerFaqRedLineContent')
const headerFaqNext = document.querySelector('.headerFaqNext').addEventListener('click', function(){

  headerFaqRedLineContent.classList.add('borderAnim');
  headerFaqIndex += 1;
  if(headerFaqIndex==7){
    headerFaqIndex = 0;
  }
  headerFaqContent.innerHTML = faq[headerFaqIndex].message;
  headerFaqNum.innerHTML = faq[headerFaqIndex].num;
  headerFaqTitle.innerHTML = faq[headerFaqIndex].question;

  setTimeout(()=>{
    headerFaqRedLineContent.classList.remove('borderAnim');
  },300)

})

headerFaqTitleImg.addEventListener('click', function(){
  audioContainer3.classList.remove('active');
  musicOpen.classList.add('active');
  arrowMusicL.classList.add('active');
  chatSideBarContainer.classList.toggle('active');
  headerSneakPeeksGallery.classList.toggle('active');
  headerFaqCard.classList.toggle('active');
  headerFaqTitleImg.classList.add('focus');
  patchLogoSide.classList.add('active')
})
headerFaqExit.addEventListener('click', function(){
  musicOpen.classList.remove('active');
  arrowMusicL.classList.remove('active');
  patchLogoSide.classList.remove('active')
  chatSideBarContainer.classList.toggle('active');
  headerSneakPeeksGallery.classList.toggle('active');
  headerFaqCard.classList.toggle('active');
  headerFaqTitleImg.classList.remove('focus');
})

const headerPromptContainer = document.querySelector('.headerPromptContainer'),
menuPromptContainer = document.querySelector('.menuPromptContainer'),
promptButton = document.querySelectorAll('.promptButton'),
promptRedLine = document.querySelectorAll('.promptRedLine');

promptRedLine[0].classList.remove('active')
promptRedLine[1].classList.remove('active')


promptButton[0].addEventListener('click', function(){
  menuPromptContainer.classList.add('hide');
  promptRedLine[0].classList.add('active')
})
promptButton[0].addEventListener('mousedown', function(){
  promptButton[0].classList.add('clicked')
})
promptButton[0].addEventListener('mouseup', function(){
  promptButton[0].classList.remove('clicked')
})
promptButton[0].addEventListener('touchstart', function(){
  promptButton[0].classList.add('clicked')
})
promptButton[0].addEventListener('touchend', function(){
  promptButton[0].classList.remove('clicked')
})


promptButton[1].addEventListener('click', function(){
  headerPromptContainer.classList.add('hide');
  promptRedLine[1].classList.add('active')
})
promptButton[1].addEventListener('mousedown', function(){
  promptButton[1].classList.add('clicked')
})
promptButton[1].addEventListener('mouseup', function(){
  promptButton[1].classList.remove('clicked')
})
promptButton[1].addEventListener('touchstart', function(){
  promptButton[1].classList.add('clicked')
})
promptButton[1].addEventListener('touchend', function(){
  promptButton[1].classList.remove('clicked')
})

const viewCloseButton = document.querySelector('.viewCloseButton')
const viewCard = document.querySelector('.viewCard')
const viewNameP = document.querySelector('.viewNameP')
const viewRole = document.querySelector('.viewRole')
const viewImg = document.querySelector('.viewImg')
const twLink = document.querySelector('.twLink')
const twUn = document.querySelector('.twUn')
const indiInfoCard = document.querySelectorAll('.indiInfoCard')
const indiPic = document.querySelectorAll('.indiPic')
const indiTitle = document.querySelectorAll('.indiTitle')
const popUpImageView = document.querySelector('#popUpImageView')
const bioP = document.querySelector('.bioP')
const indiScrName = document.querySelectorAll('.indiScrName')
let bios = [
  {
    bio: "The one who started it all. Turning dreams into reality. Dad by day, lurking in the web3 space by night. Loves anime and gaming till the end of time.",
    tw: "https://www.twitter.com/NonFungibleYuta",
    twUn: "@NonFungibleYuta",
    dp: "/imgs/team/yuta.webp",
    lvl:"50 (Max)",
    org:"Philippines"
  },
  {
    bio: "Usually levels up by eating Korean instant noodles and super crispy fried chicken. Works as a full-time artist for Studio CXGNUS then plays a lot of Maplestory afterward. Past works include graphic designing with a background in photography and videography.",
    tw: "https://www.twitter.com/suoh_nft",
    twUn: "@suoh_nft",
    dp: "/imgs/team/suoh.webp",
    lvl:"48",
    org:"Netherlands"
  },
  {
    bio: "A wanderer. Likes to learn new things. Enjoys playing video games, playing instruments, and editing videos. A certified night owl person.",
    tw: "https://www.twitter.com/shibakinu_",
    twUn: "@shibakinu_",
    dp: "/imgs/team/shiba.webp",
    lvl:"48",
    org:"Philippines"
  },
  {
    bio: "A self-taught web developer who pulls up an all-nighter. Currently working with his degree of BS in Computer Engineering.  A pianist who plays by ear and has millions of views with his piano covers on YouTube. Splits time between music and exploring the world of web development. Likes music, games, and computers.",
    tw: "https://www.twitter.com/dondycles_nft",
    twUn: "@dondycles_nft",
    dp: "/imgs/team/dondy.webp",
    lvl:"46",
    org:"Philippines"
  },
  {
    bio: "The sleepless artist. Specializes in 2D art such as Character design and Illustration. Past work includes working in the Game Industry, drawing game art assets and webtoons. A newbie in the NFT scene that will share his artistic skills and passion for art. Likes games, anime, Vtubers, and art.",
    tw: "https://www.twitter.com/nemu_cxgnus",
    twUn: "@nemu_cxgnus",
    dp: "/imgs/team/nemurin.webp",
    lvl:"35",
    org:"Philippines"
  },
  {
    bio: "2D artist, Illustrator and Animator. Just a chill guy who likes to sleep and go out. Also enjoys playing video games and doing sports.",
    tw: "",
    twUn: "",
    dp: "/imgs/team/raf.webp",
    lvl:"35",
    org:"Philippines"
  },
  {
    bio: "A game dev artist and specializes in pixel art. Has already worked on a few NFT projects and very open to the NFT scene. Likes MMO games, anime, food and marvel.",
    tw: "",
    twUn: "",
    dp: "/imgs/team/benny.webp",
    lvl:"34",
    org:"Philippines"
  },
  {
    bio: "Xius is a music producer and nft enthusiast from Nigeria. Started out music production in 2019 and entered the nft space in February 2022. ",
    tw: "https://twitter.com/Meek_drills",
    twUn: "@Meek_drills",
    dp: "/imgs/team/xius.webp",
    lvl:"34",
    org:"Nigeria"
  },
  {
    bio: "Despite the name, more of an angel than a devil and most certainly more human than a water-breathing animal. A Political Science student who's had enough of Socrates. Frequently found holed up in the university library or a Starbucks romanticizing studying and world-building in Minecraft. Likes tattoos, games, music, and philosophy.",
    tw: "https://www.twitter.com/D3VILS_FISH",
    twUn: "@D3VILS_FISH",
    dp: "/imgs/team/dani.webp",
    lvl:"27",
    org:"Philippines"
  },
  {
    bio: "Keeps all things in line with the brand. A fan of deep conversations despite having a shallow sense of humor. Likes singing, gaming, reading, and keeping busy. Wants to work in the field of forensics and/or law someday but at the end of the day, the goal is to embody Elle Woods, Sharpay, and Rory Gilmore. ",
    tw: "https://www.twitter.com/adahnft",
    twUn: "@adahnft",
    dp: "/imgs/team/tine.webp",
    lvl:"27",
    org:"Philippines"
    
  },
  {
    bio: "Accountancy graduate and bookkeeper 24/7. Enjoys managing and hosting events of different organizations and communities. Definitely a certified sleepyhead and pizza lover.",
    tw: "https://www.twitter.com/AnniBee_nft",
    twUn: "@AnniBee_nft",
    dp: "/imgs/team/annie.webp",
    lvl:"30",
    org:"Philippines"
    
  },
  {
    bio: "Learns things in a different way. Approaches things as a trial. Loves to study human actions. Likes to be an alien.",
    tw: "https://www.twitter.com/zugareh1",
    twUn: "@zugareh1",
    dp: "/imgs/team/shiuga.webp",
    lvl:"26",
    org:"Philippines"
  },
  {
    bio: "Thinking about business in the morning and playing games at night. Kinda lazy and sleepy at times but still trying her best. A big foodie.",
    tw: "https://www.twitter.com/zyyynft_",
    twUn: "@zyyynft_",
    dp: "/imgs/team/zy.webp",
    lvl:"22",
    org:"Philippines"
    
  },
  {
    bio: "Timid student by day, community builder at night. On the path to becoming an expert in communication. She absolutely loves to engage and enjoy life by serving and singing.",
    tw: "https://www.twitter.com/0xMaxine",
    twUn: "@0xMaxine",
    dp: "/imgs/team/maxine.webp",
    lvl:"21",
    org:"Philippines"
  },
  {
    bio: "An aspiring Psychologist with a second major in IT. From 'Understanding the Self', into understanding the metaverse. The addition, this knowledge and understanding keeps on building for him through the concept of 'Tabula rasa'. Obsessed with anime, manga, and manhwas.",
    tw: "https://www.twitter.com/TokyoG15",
    twUn: "@TokyoG15",
    dp: "/imgs/team/paul.webp",
    lvl:"20",
    org:"Philippines"
  }
]

let clickedThat = false;

viewCloseButton.addEventListener('click', function(){
  clickedThat = false;

  viewCard.classList.remove('view');
  popUpImageView.classList.remove('view');

  for(let i = 0; i < indiPic.length; i++){
    indiInfoCard[i].classList.remove('focus')
  }
})

const lvl = document.querySelector('.lvl')
const org = document.querySelector('.origin')

for(let i = 0; i < indiPic.length; i++){
  indiPic[i].src = bios[i].dp;

  indiPic[i].addEventListener('click', ()=>{
    clickedThat = true;
    viewImg.src = indiPic[i].src;
    indiInfoCard[i].classList.add('focus')
    viewCard.classList.add('view');
    popUpImageView.classList.add('view');
    bioP.innerHTML = bios[i].bio;
    twLink.setAttribute('href', bios[i].tw)
    viewNameP.innerHTML = indiScrName[i].innerHTML;
    viewRole.innerHTML = indiTitle[i].innerHTML;
    twUn.innerHTML = bios[i].twUn;
    lvl.innerHTML = bios[i].lvl;
    org.innerHTML = bios[i].org;
  })
}

setInterval(()=>{
  if(!clickedThat){
    for(let x = 0; x < indiInfoCard.length; x++){
      indiInfoCard[x].classList.remove('view')
      indiPic[x].classList.remove('view');
    }
  }
  else{
    for(let y = 0; y < indiInfoCard.length; y++){
      indiInfoCard[y].classList.add('view')
      indiPic[y].classList.add('view');
    }
  }
},100)

const chaptersContent = document.querySelector('.chaptersContent')
const mapBgBlack = document.querySelector('.mapBgBlack')

const chapProl = document.querySelector('.chapProl')
const chap1 = document.querySelector('.chap1')
const chap2 = document.querySelector('.chap2')

const chapContentTitle = document.querySelectorAll('.chapContentTitle')
const chapContentContext = document.querySelectorAll('.chapContentContext')

let chapSelection = "none";
let chapContextIndex = 0;

let prolContent = [
  {
    prolTitle: "MINTING PHASE",
    prolContent: "Transporting your NFT characters into the world of CXGNUS. Sit tight, and get ready for an adventure of a lifetime.",
    page: "page 1 out of 2",
    pageMV: "page 1 out of 1"
  },
  {
    prolTitle: "GENERAL REVEAL",
    prolContent: "More info coming soon!."
  },
  {
    prolTitle: "STAKING BEGINS",
    prolContent: "More info regarding staking can be found on Chapter 1 option.",
    page: "page 2 out of 2"
  },
  {
    prolTitle: "",
    prolContent: ""
  }
];
let chap1Content = [
  {
    chap1Title: "CXGNUS ORIGINAL LIGHTNOVEL",
    chap1Content: "The release of the CXGNUS original light novel featuring CXGNUS heroes.",
    page: "page 1 out of 5",
    pageMV: "page 1 out of 3"
  },
  {
    chap1Title: "CXGNUS HUB",
    chap1Content: "Creation of (DAO) exclusive for holders. Exciting events and exclusive perks will be made available."
  },
  {
    chap1Title: "CXGNUS OST ALBUM",
    chap1Content: "The release of the CXGNUS OST album follow the genre and musical colors appropriate to the NFT and the light novel.",
    page: "page 2 out of 5"
  },
  {
    chap1Title: "CXGNUS OFFICIAL MERCHANDISE",
    chap1Content: "The official merchandise ranges from clothing items such as streetwear, art prints, and other items that will be requested by the community."
  },
  {
    chap1Title: "STAKING",
    chap1Content: "CXGNUS NFT holders will receive an admission letter to CXGNUS Academy. By registering (staking), characters will go under training in order to become full-fledged heroes of society.",
    page: "page 3 out of 5",
    pageMV: "page 2 out of 3"
  },
  {
    chap1Title: "CXGNUS ACADEMY <span>(CXGA)</span>",
    chap1Content: "When CXGNUS character is admitted to CXGA (CXGNUS Academy) they will accumulate EXP (experience) that will help them level up and will be entitled to earn CXG$ tokens."
  },
  {
    chap1Title: "LEVEL-UP SYSTEM",
    chap1Content: "- There will be level-up milestone perks that will be announced in the latter part of your journey. <br> <span>[The milestone perks will consist of exclusive raffle entries.]</span>",
    page: "page 4 out of 5"
  },
  {
    chap1Title: "CXG$ TOKEN",
    chap1Content: "- CXG$ is the official community currency.<br>- Holders willl earn CXG$ per day after admitting their characters to CXGA.<br>- CXG$ can be used to buy whitelist spots, official merchandise, and items to help heroes complete CXGA missions."
  },
  {
    chap1Title: "CXGNUS STORE",
    chap1Content: "More things that can be bought with CXG$ willl be available here. Stay tuned!",
    page: "page 5 out of 5",
    pageMV: "page 3 out of 3"
  },
  {
    chap1Title: "",
    chap1Content: ""
  },
  {
    chap1Title: "",
    chap1Content: ""
  },
  {
    chap1Title: "",
    chap1Content: ""
  }
]

let chap2Content = [
  {
    chap2Title: "CXGNUS GAME",
    chap2Content: "All information and other details of the game are to be announced. Keep an eye out!",
    pageMV: "page 1 out of 1",
    page: "page 1 out of 2"
  },
  {
    chap2Title: "GIVING BACK",
    chap2Content: "As CXGNUS is a community-driven project, this is to give value to the community and uplift other artists and creators."
  },
  {
    chap2Title: "END?",
    chap2Content: "More chapters should be added as we progress through our journey in the CXGNUS Universe",
    page: "page 2 out of 2"
  },
  {
    chap2Title: "",
    chap2Content: ""
  },
]
const chapNextBtn = document.querySelector('.chapNextBtn')
const chapPage = document.querySelector('.chapPage')

chapNextBtn.addEventListener('click', function(){
  if(chapSelection == "prol"){
    chapContextIndex += 2;

    if(chapContextIndex == 4){
      chapContextIndex = 0;
    }

    chapPage.innerHTML = prolContent[chapContextIndex].page;
    

    chapContentTitle[0].innerHTML = prolContent[chapContextIndex].prolTitle;
    chapContentContext[0].innerHTML = prolContent[chapContextIndex].prolContent;

    chapContentTitle[1].innerHTML = prolContent[chapContextIndex + 1].prolTitle;
    chapContentContext[1].innerHTML = prolContent[chapContextIndex + 1].prolContent;


    chapContentTitle[1].style.display = "unset"
    chapContentContext[1].style.display = "unset"
    if( chapContentTitle[1].innerHTML == ""){
      chapContentTitle[1].style.display = "none"
      chapContentContext[1].style.display = "none"
    } 
  }

  if(chapSelection == "chap1"){
    chapContextIndex += 2;
    
    if(chapContextIndex == 10){
      chapContextIndex = 0;
    }
    chapPage.innerHTML = chap1Content[chapContextIndex].page;

    chapContentTitle[0].innerHTML = chap1Content[chapContextIndex].chap1Title;
    chapContentContext[0].innerHTML = chap1Content[chapContextIndex].chap1Content;

    chapContentTitle[1].innerHTML = chap1Content[chapContextIndex+1].chap1Title;
    chapContentContext[1].innerHTML = chap1Content[chapContextIndex+1].chap1Content;


    chapContentTitle[1].style.display = "unset"
    chapContentContext[1].style.display = "unset"
    if( chapContentTitle[1].innerHTML == ""){
      chapContentTitle[1].style.display = "none"
      chapContentContext[1].style.display = "none"
    } 
  }
  if(chapSelection == "chap2"){
    chapContextIndex += 2;

    if(chapContextIndex == 4){
      chapContextIndex = 0;
    }
    chapPage.innerHTML = chap2Content[chapContextIndex].page;

    chapContentTitle[0].innerHTML = chap2Content[chapContextIndex].chap2Title;
    chapContentContext[0].innerHTML = chap2Content[chapContextIndex].chap2Content;

    chapContentTitle[1].innerHTML = chap2Content[chapContextIndex + 1].chap2Title;
    chapContentContext[1].innerHTML = chap2Content[chapContextIndex + 1].chap2Content;

    chapContentTitle[1].style.display = "unset"
    chapContentContext[1].style.display = "unset"
    if( chapContentTitle[1].innerHTML == ""){
      chapContentTitle[1].style.display = "none"
      chapContentContext[1].style.display = "none"
    } 
  }
})

chapNextBtn.addEventListener('mousedown', function(){
  chapNextBtn.classList.add('clicked')
})
chapNextBtn.addEventListener('mouseup', function(){
  chapNextBtn.classList.remove('clicked')
})
chapNextBtn.addEventListener('touchstart', function(){
  chapNextBtn.classList.add('clicked')
})
chapNextBtn.addEventListener('touchend', function(){
  chapNextBtn.classList.remove('clicked')
})

chapContentTitle[0].innerHTML = "";
chapContentContext[0].innerHTML = "";
chapContentTitle[1].innerHTML = "";
chapContentContext[1].innerHTML = "";
chaptersContent.classList.remove('active')

chapProl.addEventListener('click', function(){
  chapPage.innerHTML = prolContent[0].page;

  mapBgBlack.classList.add('active')

  chaptersContent.classList.add('active')


  chapProl.classList.add('pointNone');
  chapProl.classList.add('focus');

  chap1.classList.remove('pointNone');
  chap1.classList.remove('focus');

  chap2.classList.remove('pointNone');
  chap2.classList.remove('focus');
  
  chapContextIndex = 0;

  chapSelection = "prol";

  chapContentTitle[0].innerHTML = prolContent[chapContextIndex].prolTitle;
  chapContentContext[0].innerHTML = prolContent[chapContextIndex].prolContent;

  chapContentTitle[1].innerHTML = prolContent[chapContextIndex + 1].prolTitle;
  chapContentContext[1].innerHTML = prolContent[chapContextIndex + 1].prolContent;

  chapContentTitle[1].style.display = "unset"
  chapContentContext[1].style.display = "unset"
  if( chapContentTitle[1].innerHTML == ""){
    chapContentTitle[1].style.display = "none"
    chapContentContext[1].style.display = "none"
  } 
})
chapProl.addEventListener('mouseover', function(){
  chapProl.classList.add('hover');
})
chapProl.addEventListener('mouseleave', function(){
  chapProl.classList.remove('hover');
})
chapProl.addEventListener('mousedown', function(){
  chapProl.classList.add('clicked');
})
chapProl.addEventListener('mouseup', function(){
  chapProl.classList.remove('clicked');
})
chapProl.addEventListener('touchstart', function(){
  chapProl.classList.add('clicked');
})
chapProl.addEventListener('touchend', function(){
  chapProl.classList.remove('clicked');
})

chap1.addEventListener('click', function(){
  chapPage.innerHTML = chap1Content[0].page;

  mapBgBlack.classList.add('active')

  chaptersContent.classList.add('active')


  chapProl.classList.remove('pointNone');
  chapProl.classList.remove('focus');

  chap1.classList.add('pointNone');
  chap1.classList.add('focus');

  chap2.classList.remove('pointNone');
  chap2.classList.remove('focus');


  chapContextIndex = 0;

  chapSelection = "chap1";

  chapContentTitle[0].innerHTML = chap1Content[chapContextIndex].chap1Title;
  chapContentContext[0].innerHTML = chap1Content[chapContextIndex].chap1Content;

  chapContentTitle[1].innerHTML = chap1Content[chapContextIndex+1].chap1Title;
  chapContentContext[1].innerHTML = chap1Content[chapContextIndex+1].chap1Content;

  chapContentTitle[1].style.display = "unset"
  chapContentContext[1].style.display = "unset"
  if( chapContentTitle[1].innerHTML == ""){
    chapContentTitle[1].style.display = "none"
    chapContentContext[1].style.display = "none"
  } 
})
chap1.addEventListener('mouseover', function(){
  chap1.classList.add('hover');
})
chap1.addEventListener('mouseleave', function(){
  chap1.classList.remove('hover');
})
chap1.addEventListener('mousedown', function(){
  chap1.classList.add('clicked');
})
chap1.addEventListener('mouseup', function(){
  chap1.classList.remove('clicked');
})
chap1.addEventListener('touchstart', function(){
  chap1.classList.add('clicked');
})
chap1.addEventListener('touchend', function(){
  chap1.classList.remove('clicked');
})


chap2.addEventListener('click', function(){
  chapPage.innerHTML = chap2Content[0].page;

  mapBgBlack.classList.add('active')

  chaptersContent.classList.add('active')


  chapProl.classList.remove('pointNone');
  chapProl.classList.remove('focus');

  chap1.classList.remove('pointNone');
  chap1.classList.remove('focus');

  chap2.classList.add('pointNone');
  chap2.classList.add('focus');

  chapContextIndex = 0;

  chapSelection = "chap2";

  chapContentTitle[0].innerHTML = chap2Content[chapContextIndex].chap2Title;
  chapContentContext[0].innerHTML = chap2Content[chapContextIndex].chap2Content;

  chapContentTitle[1].innerHTML = chap2Content[chapContextIndex + 1].chap2Title;
  chapContentContext[1].innerHTML = chap2Content[chapContextIndex + 1].chap2Content;

  chapContentTitle[1].style.display = "unset"
  chapContentContext[1].style.display = "unset"
  if( chapContentTitle[1].innerHTML == ""){
    chapContentTitle[1].style.display = "none"
    chapContentContext[1].style.display = "none"
  } 
})
chap2.addEventListener('mouseover', function(){
  chap2.classList.add('hover');
})
chap2.addEventListener('mouseleave', function(){
  chap2.classList.remove('hover');
})
chap2.addEventListener('mousedown', function(){
  chap2.classList.add('clicked');
})
chap2.addEventListener('mouseup', function(){
  chap2.classList.remove('clicked');
})
chap2.addEventListener('touchstart', function(){
  chap2.classList.add('clicked');
})
chap2.addEventListener('touchend', function(){
  chap2.classList.remove('clicked');
})

const chapExitBtn = document.querySelector('.chapExitBtn')

chapExitBtn.addEventListener('click', function(){
  mapBgBlack.classList.remove('active')


  chapProl.classList.remove('pointNone');
  chapProl.classList.remove('focus');

  chap1.classList.remove('pointNone');
  chap1.classList.remove('focus');

  chap2.classList.remove('pointNone');
  chap2.classList.remove('focus');

  chaptersContent.classList.remove('active')


})

chapExitBtn.addEventListener('mousedown', function(){
  chapExitBtn.classList.add('clicked')
})
chapExitBtn.addEventListener('mouseup', function(){
  chapExitBtn.classList.remove('clicked')
})
chapExitBtn.addEventListener('touchstart', function(){
  chapExitBtn.classList.add('clicked')
})
chapExitBtn.addEventListener('touchend', function(){
  chapExitBtn.classList.remove('clicked')
})












const chapProlMV = document.querySelector('.chapProlMV')
const chap1MV = document.querySelector('.chap1MV')
const chap2MV = document.querySelector('.chap2MV')
const chaptersContentScrollContainer = document.querySelector('.chaptersContentScrollContainer')

const chapContentTitleMV = document.querySelectorAll('.chapContentTitleMV')
const chapContentContextMV = document.querySelectorAll('.chapContentContextMV')

const chaptersContentMV = document.querySelector('.chaptersContentMV')

const mapTitleContainer = document.querySelector('.mapTitleContainer')
const chapPageMV = document.querySelector('.chapPageMV')

let chapContextIndexMV = 0;


chapProlMV.addEventListener('click', function(){
  chapContextIndexMV = 0;

  chapPageMV.innerHTML = prolContent[chapContextIndexMV].pageMV;

  audioContainer.classList.add('activeMap');

  chaptersContentScrollContainer.classList.add('active')

  chapSelection = "prol";


  chaptersContentMV.classList.add('active')

  chapProlMV.classList.toggle('focus');

  chap1MV.classList.remove('focus');

  chap2MV.classList.remove('focus');

  chapContentTitleMV[0].innerHTML = prolContent[chapContextIndexMV].prolTitle;
  chapContentContextMV[0].innerHTML = prolContent[chapContextIndexMV].prolContent;

  chapContentTitleMV[1].innerHTML = prolContent[chapContextIndexMV + 1].prolTitle;
  chapContentContextMV[1].innerHTML = prolContent[chapContextIndexMV + 1].prolContent;

  chapContentTitleMV[2].innerHTML = prolContent[chapContextIndexMV + 2].prolTitle;
  chapContentContextMV[2].innerHTML = prolContent[chapContextIndexMV + 2].prolContent;

  chapContentTitleMV[3].innerHTML = prolContent[chapContextIndexMV + 3].prolTitle;
  chapContentContextMV[3].innerHTML = prolContent[chapContextIndexMV + 3].prolContent;


  chapContentTitleMV[0].style.display = "unset"
    chapContentContextMV[0].style.display = "unset"

    chapContentTitleMV[1].style.display = "unset"
    chapContentContextMV[1].style.display = "unset"

    chapContentTitleMV[2].style.display = "unset"
    chapContentContextMV[2].style.display = "unset"

    chapContentTitleMV[3].style.display = "unset"
    chapContentContextMV[3].style.display = "unset"
    
    if( chapContentTitleMV[0].innerHTML == ""){
      chapContentTitleMV[0].style.display = "none"
      chapContentContextMV[0].style.display = "none"
    } 
    if( chapContentTitleMV[1].innerHTML == ""){
      chapContentTitleMV[1].style.display = "none"
      chapContentContextMV[1].style.display = "none"
    } 
    if( chapContentTitleMV[2].innerHTML == ""){
      chapContentTitleMV[2].style.display = "none"
      chapContentContextMV[2].style.display = "none"
    } 
    if( chapContentTitleMV[3].innerHTML == ""){
      chapContentTitleMV[3].style.display = "none"
      chapContentContextMV[3].style.display = "none"
    } 
})
chapProlMV.addEventListener('mouseover', function(){
  chapProlMV.classList.add('hover');
})
chapProlMV.addEventListener('mouseleave', function(){
  chapProlMV.classList.remove('hover');
})
chapProlMV.addEventListener('mousedown', function(){
  chapProlMV.classList.add('clicked');
})
chapProlMV.addEventListener('mouseup', function(){
  chapProlMV.classList.remove('clicked');
})


chap1MV.addEventListener('click', function(){
  chapContextIndexMV = 0;

  chapPageMV.innerHTML = chap1Content[chapContextIndexMV].pageMV;

  audioContainer.classList.add('activeMap');

  chaptersContentScrollContainer.classList.add('active')

  chapSelection = "chap1";


  chaptersContentMV.classList.add('active')

  chapProlMV.classList.remove('focus');

  chap1MV.classList.toggle('focus');

  chap2MV.classList.remove('focus');

  chapContentTitleMV[0].innerHTML = chap1Content[chapContextIndexMV].chap1Title;
  chapContentContextMV[0].innerHTML = chap1Content[chapContextIndexMV].chap1Content;

  chapContentTitleMV[1].innerHTML = chap1Content[chapContextIndexMV + 1].chap1Title;
  chapContentContextMV[1].innerHTML = chap1Content[chapContextIndexMV + 1].chap1Content;

  chapContentTitleMV[2].innerHTML = chap1Content[chapContextIndexMV + 2].chap1Title;
  chapContentContextMV[2].innerHTML = chap1Content[chapContextIndexMV + 2].chap1Content;

  chapContentTitleMV[3].innerHTML = chap1Content[chapContextIndexMV + 3].chap1Title;
  chapContentContextMV[3].innerHTML = chap1Content[chapContextIndexMV + 3].chap1Content;

  if( chapContentTitleMV[0].innerHTML == ""){
    chapContentTitleMV[0].style.display = "none"
    chapContentContextMV[0].style.display = "none"
  } 
  if( chapContentTitleMV[1].innerHTML == ""){
    chapContentTitleMV[1].style.display = "none"
    chapContentContextMV[1].style.display = "none"
  } 
  if( chapContentTitleMV[2].innerHTML == ""){
    chapContentTitleMV[2].style.display = "none"
    chapContentContextMV[2].style.display = "none"
  } 
  if( chapContentTitleMV[3].innerHTML == ""){
    chapContentTitleMV[3].style.display = "none"
    chapContentContextMV[3].style.display = "none"
  } 
})
chap1MV.addEventListener('mouseover', function(){
  chap1MV.classList.add('hover');
})
chap1MV.addEventListener('mouseleave', function(){
  chap1MV.classList.remove('hover');
})
chap1MV.addEventListener('mousedown', function(){
  chap1MV.classList.add('clicked');
})
chap1MV.addEventListener('mouseup', function(){
  chap1MV.classList.remove('clicked');
})
chap1MV.addEventListener('touchstart', function(){
  chap1MV.classList.add('clicked');
})
chap1MV.addEventListener('touchend', function(){
  chap1MV.classList.remove('clicked');
})

chap2MV.addEventListener('click', function(){
  chapContextIndexMV = 0;

  chapPageMV.innerHTML = chap2Content[chapContextIndexMV].pageMV;

  audioContainer.classList.add('activeMap');

  chaptersContentScrollContainer.classList.add('active')

  chapSelection = "chap2";


  chaptersContentMV.classList.add('active')

  chapProlMV.classList.remove('focus');

  chap1MV.classList.remove('focus');

  chap2MV.classList.toggle('focus');

  chapContentTitleMV[0].innerHTML = chap2Content[chapContextIndexMV].chap2Title;
  chapContentContextMV[0].innerHTML = chap2Content[chapContextIndexMV].chap2Content;

  chapContentTitleMV[1].innerHTML = chap2Content[chapContextIndexMV + 1].chap2Title;
  chapContentContextMV[1].innerHTML = chap2Content[chapContextIndexMV + 1].chap2Content;

  chapContentTitleMV[2].innerHTML = chap2Content[chapContextIndexMV + 2].chap2Title;
  chapContentContextMV[2].innerHTML = chap2Content[chapContextIndexMV + 2].chap2Content;

  chapContentTitleMV[3].innerHTML = chap2Content[chapContextIndexMV + 3].chap2Title;
  chapContentContextMV[3].innerHTML = chap2Content[chapContextIndexMV + 3].chap2Content;

  if( chapContentTitleMV[0].innerHTML == ""){
    chapContentTitleMV[0].style.display = "none"
    chapContentContextMV[0].style.display = "none"
  } 
  if( chapContentTitleMV[1].innerHTML == ""){
    chapContentTitleMV[1].style.display = "none"
    chapContentContextMV[1].style.display = "none"
  } 
  if( chapContentTitleMV[2].innerHTML == ""){
    chapContentTitleMV[2].style.display = "none"
    chapContentContextMV[2].style.display = "none"
  } 
  if( chapContentTitleMV[3].innerHTML == ""){
    chapContentTitleMV[3].style.display = "none"
    chapContentContextMV[3].style.display = "none"
  } 
})
chap2MV.addEventListener('mouseover', function(){
  chap2MV.classList.add('hover');
})
chap2MV.addEventListener('mouseleave', function(){
  chap2MV.classList.remove('hover');
})
chap2MV.addEventListener('mousedown', function(){
  chap2MV.classList.add('clicked');
})
chap2MV.addEventListener('mouseup', function(){
  chap2MV.classList.remove('clicked');
})
chap2MV.addEventListener('touchstart', function(){
  chap2MV.classList.add('clicked');
})
chap2MV.addEventListener('touchend', function(){
  chap2MV.classList.remove('clicked');
})


//closing the mobile view map
const cBE = document.querySelector('.cBE')

cBE.addEventListener('click', function(){

  audioContainer.classList.remove('activeMap');

  chaptersContentScrollContainer.classList.remove('active')

  mapTitleContainer.classList.remove('active')

  chaptersContentMV.classList.remove('active')


  chapProlMV.classList.remove('focus');

  chap1MV.classList.remove('focus');

  chap2MV.classList.remove('focus');
})

//next
const cBA = document.querySelector('.cBA')


cBA.addEventListener('click', function(){
  if(chapSelection == "prol"){
    chapContextIndexMV = 0;

    chapPageMV.innerHTML = prolContent[chapContextIndexMV].pageMV;

    chapContentTitleMV[0].innerHTML = prolContent[chapContextIndexMV].prolTitle;
    chapContentContextMV[0].innerHTML = prolContent[chapContextIndexMV].prolContent;

    chapContentTitleMV[1].innerHTML = prolContent[chapContextIndexMV + 1].prolTitle;
    chapContentContextMV[1].innerHTML = prolContent[chapContextIndexMV + 1].prolContent;

    chapContentTitleMV[2].innerHTML = prolContent[chapContextIndexMV + 2].prolTitle;
    chapContentContextMV[2].innerHTML = prolContent[chapContextIndexMV + 2].prolContent;

    chapContentTitleMV[3].innerHTML = prolContent[chapContextIndexMV + 3].prolTitle;
    chapContentContextMV[3].innerHTML = prolContent[chapContextIndexMV + 3].prolContent;

    chapContentTitleMV[0].style.display = "unset"
    chapContentContextMV[0].style.display = "unset"

    chapContentTitleMV[1].style.display = "unset"
    chapContentContextMV[1].style.display = "unset"

    chapContentTitleMV[2].style.display = "unset"
    chapContentContextMV[2].style.display = "unset"

    chapContentTitleMV[3].style.display = "unset"
    chapContentContextMV[3].style.display = "unset"
    
    if( chapContentTitleMV[1].innerHTML == ""){
      chapContentTitleMV[1].style.display = "none"
      chapContentContextMV[1].style.display = "none"
    } 
    if( chapContentTitleMV[2].innerHTML == ""){
      chapContentTitleMV[2].style.display = "none"
      chapContentContextMV[2].style.display = "none"
    } 
    if( chapContentTitleMV[3].innerHTML == ""){
      chapContentTitleMV[3].style.display = "none"
      chapContentContextMV[3].style.display = "none"
    } 
  }

  if(chapSelection == "chap1"){
    chapContextIndexMV += 4;
    
    if(chapContextIndexMV == 12){
      chapContextIndexMV = 0;
    }

    chapPageMV.innerHTML = chap1Content[chapContextIndexMV].pageMV;

    chapContentTitleMV[0].innerHTML = chap1Content[chapContextIndexMV].chap1Title;
    chapContentContextMV[0].innerHTML = chap1Content[chapContextIndexMV].chap1Content;

    chapContentTitleMV[1].innerHTML = chap1Content[chapContextIndexMV + 1].chap1Title;
    chapContentContextMV[1].innerHTML = chap1Content[chapContextIndexMV + 1].chap1Content;

    chapContentTitleMV[2].innerHTML = chap1Content[chapContextIndexMV + 2].chap1Title;
    chapContentContextMV[2].innerHTML = chap1Content[chapContextIndexMV + 2].chap1Content;

    chapContentTitleMV[3].innerHTML = chap1Content[chapContextIndexMV + 3].chap1Title;
    chapContentContextMV[3].innerHTML = chap1Content[chapContextIndexMV + 3].chap1Content;

    chapContentTitleMV[0].style.display = "unset"
    chapContentContextMV[0].style.display = "unset"

    chapContentTitleMV[1].style.display = "unset"
    chapContentContextMV[1].style.display = "unset"

    chapContentTitleMV[2].style.display = "unset"
    chapContentContextMV[2].style.display = "unset"

    chapContentTitleMV[3].style.display = "unset"
    chapContentContextMV[3].style.display = "unset"
    
    if( chapContentTitleMV[1].innerHTML == ""){
      chapContentTitleMV[1].style.display = "none"
      chapContentContextMV[1].style.display = "none"
    } 
    if( chapContentTitleMV[2].innerHTML == ""){
      chapContentTitleMV[2].style.display = "none"
      chapContentContextMV[2].style.display = "none"
    } 
    if( chapContentTitleMV[3].innerHTML == ""){
      chapContentTitleMV[3].style.display = "none"
      chapContentContextMV[3].style.display = "none"
    } 
  }
  if(chapSelection == "chap2"){
    chapPageMV.innerHTML = chap2Content[chapContextIndexMV].pageMV;

    chapContextIndexMV = 0;

    chapContentTitleMV[0].innerHTML = chap2Content[chapContextIndexMV].chap2Title;
    chapContentContextMV[0].innerHTML = chap2Content[chapContextIndexMV].chap2Content;

    chapContentTitleMV[1].innerHTML = chap2Content[chapContextIndexMV + 1].chap2Title;
    chapContentContextMV[1].innerHTML = chap2Content[chapContextIndexMV + 1].chap2Content;

    chapContentTitleMV[2].innerHTML = chap2Content[chapContextIndexMV + 2].chap2Title;
    chapContentContextMV[2].innerHTML = chap2Content[chapContextIndexMV + 2].chap2Content;

    chapContentTitleMV[3].innerHTML = chap2Content[chapContextIndexMV + 3].chap2Title;
    chapContentContextMV[3].innerHTML = chap2Content[chapContextIndexMV + 3].chap2Content;

    chapContentTitleMV[0].style.display = "unset"
    chapContentContextMV[0].style.display = "unset"

    chapContentTitleMV[1].style.display = "unset"
    chapContentContextMV[1].style.display = "unset"

    chapContentTitleMV[2].style.display = "unset"
    chapContentContextMV[2].style.display = "unset"

    chapContentTitleMV[3].style.display = "unset"
    chapContentContextMV[3].style.display = "unset"
    
    if( chapContentTitleMV[1].innerHTML == ""){
      chapContentTitleMV[1].style.display = "none"
      chapContentContextMV[1].style.display = "none"
    } 
    if( chapContentTitleMV[2].innerHTML == ""){
      chapContentTitleMV[2].style.display = "none"
      chapContentContextMV[2].style.display = "none"
    } 
    if( chapContentTitleMV[3].innerHTML == ""){
      chapContentTitleMV[3].style.display = "none"
      chapContentContextMV[3].style.display = "none"
    } 
  }
})

const patchTrig = document.querySelector('.patchTrig')
const patchNotesContainer = document.querySelector('.patchNotesContainer')
const patchLogoSide = document.querySelector('.patchLogoSide')
const promptButtonPatch = document.querySelector('.promptButtonPatch')

patchTrig.addEventListener('click', function(){
  patchNotesContainer.classList.add('active')
  patchLogoSide.classList.add('focus')
})
promptButtonPatch.addEventListener('click', function(){
  patchNotesContainer.classList.remove('active')
  patchLogoSide.classList.remove('focus')
})


const mintTrigger = document.querySelector('#leftMenuMint');
const mintPage = document.querySelector('#mint')

mintTrigger.addEventListener('click', function(){

  menuMainContainer.classList.add('pointNone');
  html.style.overflow = 'unset';
  footerSection.style.display = 'none';

  rightMenuItemImg[0].classList.add('mapTrig');
  rightMenuItemImg[1].classList.add('mapTrig');
  rightMenuItemImg[2].classList.add('mintTrig');
  centerMenuTeam.classList.add('mapTrig');
  leftMenuItemImg[0].classList.add('mapTrig');
  leftMenuItemImg[1].classList.add('mintTrig');
  leftMenuItemImg[2].classList.add('mapTrig');

  setTimeout(function(){
    loadingBG.style.zIndex = '12';
    loadingBG.style.transform = "translateY(0%)";
    menuToggle.click();

    rightMenuItemImg[0].classList.remove('mapTrig');
    rightMenuItemImg[1].classList.remove('mapTrig');
    rightMenuItemImg[2].classList.remove('mintTrig');
    leftMenuItemImg[0].classList.remove('mapTrig');
    leftMenuItemImg[1].classList.remove('mintTrig');
    leftMenuItemImg[2].classList.remove('mapTrig');
    centerMenuTeam.classList.remove('mapTrig');
    menuMainContainer.classList.remove('pointNone');
    onLoad();


  }, 600)

  chapProl.classList.remove('animate')
  chap1.classList.remove('animate')
  chap2.classList.remove('animate')

  cxgLogo.classList.remove('animate')
  mapLogo.classList.remove('animate')
  japLogo.classList.remove('animate')

  headerPage.style.display = "none";
  aboutPage.style.display = "none";
  mapPage.style.display = "none";

  setTimeout(function(){
    mintPage.style.display = "flex";
  }, 1000);
  setTimeout(function(){
  }, 2000);
})

