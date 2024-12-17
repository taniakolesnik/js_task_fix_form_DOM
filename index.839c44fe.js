document.querySelectorAll("input").forEach(function(e){var t=document.createElement("label");t.setAttribute("for",e.id),t.classList.add("field-label"),t.textContent=e.name,e.parentNode.insertBefore(t,e),e.setAttribute("placeholder",String(e.name)[0].toUpperCase()+String(e.name).slice(1))});
//# sourceMappingURL=index.839c44fe.js.map
