import{a as c,S as u,i as a}from"./assets/vendor-BezXTN6Z.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const d="56163267-d67680dfcd9b48fc177fcac91";function p(s){return c.get("https://pixabay.com/api/",{params:{key:d,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data)}const l=document.querySelector(".gallery"),f=new u(".gallery a",{captionsData:"alt",captionDelay:250});function m(s){const o=s.map(t=>`
      <li class="gallery-item">
          <a class="gallery-link" href="${t.largeImageURL}">
            <img
              class="gallery-image"
              src="${t.webformatURL}"
              alt="${t.tags}"
              loading="lazy"
            />
          </a>
          <div class="info">
            <p><b>Likes</b><span>${t.likes}</span></p>
            <p><b>Views</b><span>${t.views}</span></p>
            <p><b>Comments</b><span>${t.comments}</span></p>
            <p><b>Downloads</b><span>${t.downloads}</span></p>
          </div>
        </li>
    `).join("");l.insertAdjacentHTML("beforeend",o),f.refresh()}function y(){l.innerHTML=""}function g(){document.querySelector(".loader").classList.remove("hidden")}function h(){document.querySelector(".loader").classList.add("hidden")}const b=document.querySelector(".form");b.addEventListener("submit",L);function L(s){s.preventDefault();const o=s.target.elements["search-text"].value.trim();if(!o){a.warning({message:"Please enter a search query!",position:"topRight"});return}y(),g(),p(o).then(t=>{if(t.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}m(t.hits)}).catch(t=>{a.error({message:"Something went wrong. Please try again later.",position:"topRight"}),console.error(t)}).finally(()=>{h()}),s.target.reset()}
//# sourceMappingURL=index.js.map
