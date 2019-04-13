const params = {
  lines: [
    {
      background: "#49a7c4",
      updateTime: 1000,
      elements: [
        {
          width: 25,
          background: "#ef2177"
        },
        {
          width: 25,
          background: "#3784dd"
        },
        {
          width: 30,
          background: "#b05b27"
        },
        {
          width: 20,
          background: "#1498a3"
        }
      ]
    },
    {
      background: "#ddc4a7",
      updateTime: 1500,
      elements: [
        {
          width: 10,
          background: "#1a3a51"
        },
        {
          width: 25,
          background: "#5c134a"
        },
        {
          width: 30,
          background: "#990000"
        },
        {
          width: 15,
          background: "#44742d"
        },
        {
          width: 20,
          background: "#bdddff"
        }
      ]
    },
    {
      background: "#bed4df",
      updateTime: 2000,
      elements: [
        {
          width: 25,
          background: "#5d2d74"
        },
        {
          width: 50,
          background: "#afd982"
        },
        {
          width: 25,
          background: "#fdff22"
        }
      ]
    }
  ]
};

const { lines } = params;

const calculateHeight = number => window.innerHeight / number;

const generateColor = () => (
    `rgb(${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)})`
);

const fillPage = arr => {
    for (let i = 0; i < arr.length; i++) {
        let element = document.createElement("div");
        element.style.display = "flex";
        element.style.background = arr[i].background;
        element.style.height = `${calculateHeight(lines.length)}px`;
        document.body.appendChild(element);

        const { elements } = arr[i];

        for (let j = 0; j < elements.length; j++) {
            let childElement = document.createElement("div");
            childElement.style.height = "100%";
            childElement.style.width = `${elements[j].width}%`;
            childElement.style.background = elements[j].background;
            childElement.style.transition = `${(arr[i]["updateTime"])/2}ms`;
            setInterval(() => {
              childElement.style.background = generateColor();
            }, arr[i]["updateTime"]);
            element.appendChild(childElement);
        }
    }
};

fillPage(lines);