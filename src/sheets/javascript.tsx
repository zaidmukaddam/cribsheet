import { Section } from "../models/Section";
import { Snippet } from "../models/Snippet";

import { Cheatsheet } from "../components/Cheatsheet";

const snip = new Snippet("Javascript");

// section
const JavascriptArrays = new Section("JavaScript Arrays");
JavascriptArrays.addLine("concat()", "slice()");
JavascriptArrays.addLine("join()", "sort()");
JavascriptArrays.addLine("splice()", "length");
JavascriptArrays.addLine("pop()", "push()");
snip.add(JavascriptArrays);

// section
const JSEH = new Section("JavaScript Event Handlers");
JSEH.addLine("onabort", "onblur");
JSEH.addLine("ondblclick", "onclick");
JSEH.addLine("onfocus", "onmousedown");
JSEH.addLine("onchange", "onmouseup");
JSEH.addLine("onkeydown", "onkeyup");
JSEH.addLine("onload", "onsubmit");
snip.add(JSEH);

// section
const GF = new Section("Global Functions");
GF.addLine("encodeURI()", "Encodes a URI into UTF-8");
GF.addLine("encodeURIComponent()", "Encoding for URI components");
snip.add(GF);

export function Javascript() {
  return <Cheatsheet title={snip.title} elements={snip.elements} />;
}
