//your JS code here. If required.
const container=document.querySelector(".container");
const tempDom=document.createDocumentFragment();
const images=[
	"https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
	"https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
	"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80",
	"https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
	"https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
];
const imagesText=["Explore the world","Wild Forest","Sunny Beach","City on Winter","Mountain Cloud"];
for(let i=0;i<images.length;i++){
  let div=document.createElement("div");
   div.className="panel";
	div.id=`panel-${i+1}`;
  let imageText=document.createElement("p");
	imageText.className="img-text";
	imageText.innerText=imagesText[i];
	div.appendChild(imageText);
	addBackgroundAndEvent(div,images[i]);
	tempDom.appendChild(div);
}
function addBackgroundAndEvent(div,image){
	div.style.backgroundImage=`url(${image})`;
	div.style.backgroundSize="cover";
	div.addEventListener("click",(e)=>{
		setAllFlexToOne();
		e.target.style.flex=4;
		e.target.classList.add("active");

	});
}
function setAllFlexToOne(){
	const allInnerDivs=document.querySelectorAll(".panel");
	allInnerDivs.forEach((div)=>{
		div.style.flex=1;
		div.classList.remove("active");
	})
}
container.appendChild(tempDom);
