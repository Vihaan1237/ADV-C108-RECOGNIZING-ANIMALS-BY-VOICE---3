//https://teachablemachine.withgoogle.com/models/Gp5GaETAm/model.json

function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Gp5GaETAm/model.json", modelReady);
}

function modelReady(){
    classifier.classify(gotResult);
}

function gotResult(error, results) {
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        console.log("Red "+random_number_r);
        console.log("Green "+random_number_g);
        console.log("Blue "+random_number_b);

        document.getElementById("detected").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("detected").style.fontFamily = 'Courier New'+","+'Courier'+","+'monospace';

        document.getElementById("voice").innerHTML = "Detected Voice Is Of - "+results[0].label;
        document.getElementById("voice").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("voice").style.fontFamily = 'Courier New'+","+'Courier'+","+'monospace';

        img = document.getElementById("image");

        if(results[0].label == "Barking"){
            img.src = "https://shravaripatil.github.io/Sound_controlled_animals/bark.gif";
            dog = dog+1;
            document.getElementById("detected").innerHTML = "Detected Dog - "+ dog;
        }
        else if(results[0].label == "Meowing"){
            img.src = "https://shravaripatil.github.io/Sound_controlled_animals/meow.gif";
            cat = cat+1;
            document.getElementById("detected").innerHTML = "Detected Cat - "+ cat;
        }
        else if(results[0].label == "Roar"){
            img.src = "https://www.bing.com/images/search?view=detailV2&ccid=7UJM5%2biq&id=0E729456A473F85E6581F9D4DA77AC7BDDB69443&thid=OIP.7UJM5-iqjo6lkJxew5S-BwHaHa&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.ed424ce7e8aa8e8ea5909c5ec394be07%3frik%3dQ5S23Xusd9rU%252bQ%26riu%3dhttp%253a%252f%252fwww.clipartbest.com%252fcliparts%252fKTj%252fXXX%252fKTjXXX8gc.gif%26ehk%3dKUdjPcBBkT%252fjY0VxirZWUyUob6J0qb5M73sJqKYFXbA%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=800&expw=800&q=cartoon+lion+gif&simid=607993049762190479&FORM=IRPRST&ck=5567847E40F34780AA5AD6E2E516A42E&selectedIndex=0&idpp=overlayview&ajaxhist=0&ajaxserp=0";
            lion = lion+1;
            document.getElementById("detected").innerHTML = "Detected Lion - "+ lion;
        }
        else if(results[0].label == "Mooing"){
            img.src = "https://th.bing.com/th/id/R.b4e11dc2b70207cb94f423386acf3f2c?rik=j%2fSbeyNl%2b8Nc2Q&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2f9iR%2f5qE%2f9iR5qEgpT.gif&ehk=ShP2z1%2fWaL85z9sRKB1qRZaNUWwnJc9ykc22f6jdMGc%3d&risl=&pid=ImgRaw&r=0";
            cow = cow+1;
            document.getElementById("detected").innerHTML = "Detected Cow - "+ cow;
        }
        
    }
}