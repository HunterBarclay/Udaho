function make_readable() {
    var the_problem_child = document.getElementsByClassName('pgbrk').item(0);
    if (!the_problem_child) {
        console.log("Can't find the problem child here...");
        return;
    }

    var styleElement = document.createElement("link");
    styleElement.href = "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
    styleElement.rel = "stylesheet";
    document.head.appendChild(styleElement);

    console.log('wut');

    for (var why of the_problem_child.children) {
        why.style["line-height"] = "14pt";
        why.style["padding-top"] = "5pt";
        why.style["padding-bottom"] = "5pt";
        for (var horrid_text of why.children) {
            horrid_text.style["font-family"] = '"Roboto", sans-serif'
            horrid_text.style["font-weight"] = "300";
            horrid_text.style["font-style"] = "normal";

            for (var little_bits of horrid_text.children) {
                switch (little_bits.tagName) {
                    case "SPAN":
                        little_bits.style["font-weight"] = "700";
                        little_bits.style["font-style"] = "normal";
                        break;
                    case "A":
                        little_bits.style["font-weight"] = "300";
                        little_bits.style["font-style"] = "italic";
                        little_bits.style["color"] = "#3079f0";
                        break;
                    default:
                        console.log('Skipping littlebit with tag ${little_bits.tagName}');
                        break;
                }
            }
        }
    }
}

make_readable();