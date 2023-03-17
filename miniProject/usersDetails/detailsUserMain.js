let userUrl = new URL(location.href);
let user = JSON.parse(userUrl.searchParams.get('data'))

let fatherDiv = document.createElement(`div`);
 fatherDiv.classList.add(`father`);
 document.body.appendChild(fatherDiv);

 let maind =document.createElement(`div`);
 maind.classList.add(`main`);
 fatherDiv.appendChild(maind);

 let idd1 = document.createElement(`div`);
 idd1.classList.add(`index`);
 idd1.innerHTML =`<b>id:</b>${user.id}`;
 maind.appendChild(idd1);

 let named2 = document.createElement(`div`);
 named2.classList.add(`name`);
 named2.innerHTML =`<b>name:</b>${user.name}`;
 maind.appendChild(named2);

 let userND3 = document.createElement(`div`);
 userND3.classList.add(`uName`);
 userND3.innerHTML=`<b>userName:</b>${user.username}`;
 maind.appendChild(userND3);

 let emaild4 = document.createElement(`div`);
 emaild4.classList.add(`email`);
 emaild4.innerHTML=`<b>email:</b>${user.email}`
 maind.appendChild(emaild4);

 let adred5 = document.createElement(`div`);
 adred5.classList.add(`address`);
 adred5.innerHTML =`<b>address:</b>`;
 maind.appendChild(adred5);

 let street = document.createElement(`div`);
 street.classList.add(`second`)
 street.innerHTML =`Street:${user.address.street}`;
 adred5.appendChild(street);

 let suite = document.createElement(`div`);
 suite.classList.add(`second`);
 suite.innerHTML =`Suite:${user.address.suite}`;
 adred5.appendChild(suite);

 let city = document.createElement(`div`);
 city.classList.add(`second`);
 city.innerHTML =`City:${user.address.city}`;
 adred5.appendChild(city);

 let zip = document.createElement(`div`);
 zip.classList.add(`second`);
 zip.innerHTML =`Zipcode:${user.address.zipcode}`;
 adred5.appendChild(zip);

 let geo = document.createElement(`div`);
 geo.classList.add(`geo`);
 geo.innerHTML =`<b>geo:</b>`
 adred5.appendChild(geo);

 let lat = document.createElement(`div`);
 lat.classList.add(`third`);
 lat.innerHTML =`Lat:${user.address.geo.lat}`
 geo.appendChild(lat);

 let lng = document.createElement(`div`);
 lng.classList.add(`third`);
 lng.innerHTML =`Lng:${user.address.geo.lng}`;
 geo.appendChild(lng);

 let phone = document.createElement(`div`);
 phone.classList.add(`phone`);
 phone.innerHTML =`<b>phone:</b>${user.phone}`;
 maind.appendChild(phone);

 let web = document.createElement(`div`);
 web.classList.add(`web`);
 web.innerHTML =`<b>webSite:</b>${user.website}`;
 maind.appendChild(web);

 let company = document.createElement(`div`);
 company.classList.add(`company`);
 company.innerHTML =`<b>company:</b>`
 maind.appendChild(company);

 let nameFourth = document.createElement(`div`);
 nameFourth.classList.add(`fourth`);
 nameFourth.innerHTML =`Name:${user.company.name}`;
 company.appendChild(nameFourth);

 let catchF = document.createElement(`div`);
 catchF.classList.add(`fourth`);
 catchF.innerHTML =`CatchFrase:${user.company.catchPhrase}`;
 company.appendChild(catchF);

 let bs = document.createElement(`div`);
 bs.classList.add(`fourth`);
 bs.innerHTML =`Bs:${user.company.bs}`;
 company.appendChild(bs);

 let buttDiv = document.createElement('div');
 buttDiv.classList.add('buttDiv');
 document.body.appendChild(buttDiv)

 let butt = document.createElement('button');
 butt.classList.add('button')
 butt.innerHTML = 'posts of current user';
 butt.value = 'on'
 buttDiv.append(butt)

let divUl = document.getElementById('ulDiv');
divUl.style.display = "none";

 let ul = document.createElement(`ul`);
 document.body.appendChild(divUl);
 divUl.appendChild(ul);


 fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
     .then(response => response.json())
     .then(posts => {
      let ul = document.createElement(`ul`);
      divUl.appendChild(ul);
      document.body.appendChild(divUl);

      for (const post of posts) {
       let postLi = document.createElement('li');
       postLi.innerText = post.title;

       let postA = document.createElement('a');
       postA.href = `../postDetails/postIndex.html?data=${JSON.stringify(post)}`
       postA.target = '_blank'
       ul.append(postA);
       postA.append(postLi)
      }

     });

butt.addEventListener('click', (eo) => {

 if (divUl.style.display === "none") {
  divUl.style.display = "block";
 } else {
  divUl.style.display = "none";
 }
})