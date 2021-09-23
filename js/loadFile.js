
var dropArea = document.getElementById("dropArea");
var text = document.getElementById("loadText");
var button = document.getElementById("loadBtn");
var mainBtn = document.getElementsByClassName("main-button")[0];
var ides = 1;
var filesCounter = 0;
;['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, preventDefaults, false);
})
function preventDefaults (e) {
    e.preventDefault();
    e.stopPropagation();
}
;['dragenter', 'dragover'].forEach(eventName => {
    dropArea.addEventListener(eventName, Hide, false);
})
;['dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, UnHide, false);
})
function Hide(e) {
    text.classList.add("hidden");
    button.classList.add("hidden");
}
function UnHide(e) {
    text.classList.remove("hidden");
    button.classList.remove("hidden");
}

dropArea.addEventListener('drop', handleDrop, false)
function handleDrop(e) {
  let dt = e.dataTransfer;
  let files = dt.files;
  handleFiles(files);
}

function handleFiles(files) {
    ([...files]).forEach(previewFile);
}

function previewFile(file) {
    filesCounter++;
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = function() {
      let img = document.createElement('img');
      img.src = reader.result;

      let imgContainer = document.createElement('div');
      let fileAttributes = document.createElement('div');
      fileAttributes.classList.add("file-attributes");

      let fileName = document.createElement('div');
      fileName.classList.add("regular-14");
      var nameText = file.name.split('.').slice(0, -1).join('.');
      if(nameText.length > 15){
          nameText = nameText.substr(0, 14);
      }
      fileName.innerText = nameText;
      fileAttributes.appendChild(fileName);

      let fileExtention = document.createElement('div');
      var size = Math.round(((file.size/1024)/1024)*10)/10;
      fileExtention.classList.add("regular-12");
      fileExtention.classList.add("gray-color");
      fileExtention.innerText = file.name.split('.').pop().toUpperCase() + " " + size + " mb";
      fileAttributes.appendChild(fileExtention);

      let can = document.createElement('img');
      can.src = "/img/svg/Can.svg";
      can.classList.add("can-prop");
      
      imgContainer.classList.add("file-box");
      img.classList.add("image-circle");
      imgContainer.id = ides;
      imgContainer.appendChild(img);
      imgContainer.appendChild(fileAttributes);
      imgContainer.appendChild(can);

      document.getElementById('photoArea').appendChild(imgContainer);
      can.addEventListener('click', ()=>{
        document.getElementById(imgContainer.id).remove();
        filesCounter--;
        CheckCountFiles();
      });
      ides++;
      CheckCountFiles();
    }
}

function CheckCountFiles() {
    if(filesCounter > 0){
        mainBtn.classList.add("active-main-btn");
    }
    else{
        mainBtn.classList.remove("active-main-btn");
    }
}