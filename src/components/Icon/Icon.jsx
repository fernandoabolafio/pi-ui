import React from "react";
import PropTypes from "prop-types";

const sizes = {
  sm: "7",
  md: "16",
  lg: "20"
};

const icons = (type, backgroundColor, iconColor) => {
  return {
    alert: (
      <>
        <path
          d="M225.24,24.86c-110.46,0-200,89.55-200,200s89.54,200,200,200,200-89.55,200-200S335.69,24.86,225.24,24.86Z"
          fill={backgroundColor}
        />
        <rect fill="none" />
        <path
          d="M188.2,313c0-21.92,15.7-36.84,36.8-36.84s36.8,14.92,36.8,36.84-15.7,37.47-36.8,37.47S188.2,335,188.2,313Zm11.56-164.61L198,99.49H252l-1.8,48.94-7.5,103.67H207.26Z"
          fill={iconColor}
        />
      </>
    ),
    chain: (
      <>
        <path
          fill={iconColor}
          d="M145.56,325.78a20,20,0,0,1-28.28,0L74.81,283.32a20,20,0,0,1,0-28.29l95.46-95.46a20,20,0,0,1,28.28,0L241,202a20,20,0,0,1,0,28.28l-3.52,3.52,35.36,35.35,3.52-3.51a70,70,0,0,0,0-99l-3.58-3.57,0,0-35.36-35.36v0l-3.54-3.53a70,70,0,0,0-99,0L39.46,219.68a70,70,0,0,0,0,99l42.46,42.47a70,70,0,0,0,99,0l21.19-21.2-35.36-35.35Z"
        />
        <path
          fill={iconColor}
          d="M375.33,88.86a70,70,0,0,0-99,0L255.1,110.09l35.36,35.36,21.23-21.23a20,20,0,0,1,28.29,0l35.21,35.21a20,20,0,0,1,0,28.29l-95.46,95.45a20,20,0,0,1-28.28,0L216.23,248a20,20,0,0,1,0-28.28l3.52-3.52-35.36-35.35-3.51,3.51a70,70,0,0,0,0,99l35.21,35.21c.26.26.53.5.79.75l3,3,.13-.14a70,70,0,0,0,95.13-3.56l95.45-95.46a70,70,0,0,0,0-99Z"
        />
      </>
    ),
    checkmark: (
      <>
        <circle fill={backgroundColor} cx="225" cy="225" r="200" />
        <path
          fill={iconColor}
          d="M307.51,126Q250.23,183.4,192.8,240.68l-54.49-45.5L101,240l75.09,62.57,20.46,17.08,18.9-18.9c44.45-44.55,89-88.85,133.49-133.48Z"
        />
      </>
    ),
    discuss: (
      <>
        <g>
          <path
            fill={backgroundColor}
            d="M206.52,336.2a175.27,175.27,0,0,1-104-192.8A150,150,0,0,0,69.05,381.49L24.64,425h150a149.6,149.6,0,0,0,129.93-75H274.64A174,174,0,0,1,206.52,336.2Z"
          />
        </g>
        <path
          fill={iconColor}
          d="M274.64,24.92a150,150,0,0,0,0,300.08h150l-44.4-43.51A150,150,0,0,0,274.64,24.92Zm-75,175a25,25,0,1,1,25-25A25,25,0,0,1,199.64,199.92Zm75,0a25,25,0,1,1,25-25A25,25,0,0,1,274.64,199.92Zm75,0a25,25,0,1,1,25-25A25,25,0,0,1,349.64,199.92Z"
        />
        <g>
          <circle
            fill={backgroundColor}
            cx="274.64"
            cy="174.92"
            r="25"
            transform="translate(-32.84 67.78) rotate(-13.28)"
          />
        </g>
        <g>
          <circle
            fill={backgroundColor}
            cx="199.64"
            cy="174.92"
            r="25"
            transform="translate(-34.85 50.55) rotate(-13.28)"
          />
        </g>
        <g>
          <circle
            fill={backgroundColor}
            cx="349.64"
            cy="174.92"
            r="25"
            transform="translate(-30.83 85.01) rotate(-13.28)"
          />
        </g>
      </>
    ),
    down: (
      <>
        <path
          fill={backgroundColor}
          d="M39,299l.48,1.17c.43,1.07.86,2.14,1.3,3.2a200.81,200.81,0,0,0,56.49,76l.57.48c.65.54,1.31,1.06,2,1.59l1.86,1.5c.22.17.44.06.65.23A198.76,198.76,0,0,0,225,425h.1A199.74,199.74,0,0,0,425,225.17C425,114.58,335.46,25,225,25A199.78,199.78,0,0,0,58.35,114.54c-.15.23-.29.48-.44.71A200.73,200.73,0,0,0,39,299Z"
        />
        <polygon
          fill={iconColor}
          points="140.92 189.26 203.18 251.39 203.18 101.03 247.63 101.03 247.63 251.39 309.49 189.26 340.82 220.73 225.05 336.57 109.39 220.73 140.92 189.26"
        />
      </>
    ),
    info: (
      <>
        <path
          d="M225.24,24.86c-110.46,0-200,89.55-200,200s89.54,200,200,200,200-89.55,200-200S335.69,24.86,225.24,24.86Z"
          fill={backgroundColor}
        />
        <path
          d="M166.61,177.49h80.61v140h38v32H164.81v-32h41.57v-108H166.61Zm60.82-77a26.19,26.19,0,0,1,9.9,1.89,27.78,27.78,0,0,1,8.18,5,23.68,23.68,0,0,1,5.58,7.47,21.39,21.39,0,0,1,0,18.36,24.83,24.83,0,0,1-5.58,7.55,25.32,25.32,0,0,1-8.18,5,27.34,27.34,0,0,1-9.9,1.8,28.06,28.06,0,0,1-10-1.8,25.15,25.15,0,0,1-8.28-5,24.8,24.8,0,0,1-5.57-7.55,21,21,0,0,1-2.07-9.18,23.74,23.74,0,0,1,1.62-8.55,22.19,22.19,0,0,1,4.85-7.56,24.55,24.55,0,0,1,8.1-5.4A28.94,28.94,0,0,1,227.43,100.47Z"
          fill={iconColor}
        />
      </>
    ),
    right: (
      <>
        <path
          fill={backgroundColor}
          d="M299,411l1.17-.48,3.2-1.3a200.81,200.81,0,0,0,76-56.49l.48-.57c.54-.65,1.06-1.31,1.59-2l1.5-1.86c.17-.22.06-.44.23-.65A198.76,198.76,0,0,0,425,225v-.1A199.74,199.74,0,0,0,225.17,25C114.58,25,25,114.54,25,225a199.78,199.78,0,0,0,89.54,166.65l.71.44A200.73,200.73,0,0,0,299,411Z"
        />
        <polygon
          fill={iconColor}
          points="189.26 309.08 251.39 246.82 101.03 246.82 101.03 202.37 251.39 202.37 189.26 140.51 220.73 109.18 336.57 224.95 220.73 340.61 189.26 309.08"
        />
      </>
    ),
    proposal: (
      <>
        <g>
          <polygon
            fill={backgroundColor}
            points="49.74 25.01 24.74 75 25 75 74.73 75 49.74 25.01"
          />
        </g>
        <rect fill={iconColor} x="125" y="225" width="275" height="25" />
        <rect fill={iconColor} x="125" y="275" width="137" height="25" />
        <polygon
          fill={iconColor}
          points="25 425 75 425 75 75 74.73 75 25 75 25 75.01 25 425"
        />
        <g>
          <path
            fill={backgroundColor}
            d="M100,338.43V425l67.83,0H425V25H100ZM125,125H400v25H125Zm0,50H400v25H125Zm0,50H400v25H125Zm0,50H262v25H125Z"
          />
        </g>
        <rect fill={iconColor} x="125" y="175" width="275" height="25" />
        <rect fill={iconColor} x="125" y="125" width="275" height="25" />
      </>
    ),
    questionmark: (
      <>
        <path
          fill={backgroundColor}
          d="M275,200v0a49.71,49.71,0,0,0-8.94-28.48,50.24,50.24,0,0,0-41.32-21.58,50.06,50.06,0,1,1,0,100.12A50.16,50.16,0,0,0,275,200Z"
        />
        <path
          fill={backgroundColor}
          d="M224.74,25c-110.46,0-200,89.55-200,200s89.54,200,200,200h200l-59.21-58a199.39,199.39,0,0,0,59.21-142C424.74,114.53,335.19,25,224.74,25ZM237,350H212V325h25Zm0-75.59V300H212V250h12.74a50.06,50.06,0,1,0,0-100.12c-27.7,0-50.23,23.12-50.23,50.12h-25c0-41,33.74-75.12,75.23-75.12A75.28,75.28,0,0,1,237,274.41Z"
        />
        <g>
          <path
            fill={iconColor}
            d="M224.74,124.88c-41.49,0-75.23,34.12-75.23,75.12h25c0-27,22.53-50.12,50.23-50.12a50.24,50.24,0,0,1,41.32,21.58A49.71,49.71,0,0,1,275,199.94v0a50.16,50.16,0,0,1-50.26,50H212v50h25V274.41a75.28,75.28,0,0,0-12.26-149.53Z"
          />
        </g>
        <g>
          <rect fill={iconColor} x="212" y="325" width="25" height="25" />
        </g>
      </>
    ),
    left: (
      <>
        <path
          fill={backgroundColor}
          d="M151,39l-1.17.48-3.2,1.3a200.81,200.81,0,0,0-76,56.49l-.48.57c-.54.65-1.06,1.31-1.59,2s-1,1.23-1.5,1.86c-.17.22-.06.44-.23.65A198.76,198.76,0,0,0,25,225v.1A199.74,199.74,0,0,0,224.83,425C335.42,425,425,335.46,425,225A199.78,199.78,0,0,0,335.46,58.35l-.71-.44A200.73,200.73,0,0,0,151,39Z"
        />
        <polygon
          fill={iconColor}
          points="260.74 140.92 198.61 203.18 348.97 203.18 348.97 247.63 198.61 247.63 260.74 309.49 229.27 340.82 113.42 225.05 229.27 109.39 260.74 140.92"
        />
      </>
    ),
    star: (
      <>
        <polygon
          fill={iconColor}
          points="170.4 242.02 165.62 256.74 170.4 242.02 170.4 242.02"
        />
        <polygon
          fill={iconColor}
          points="136.82 345.5 224.74 281.6 136.84 345.43 136.82 345.5"
        />
        <polygon
          fill={iconColor}
          points="312.65 345.44 283.85 256.74 312.63 345.43 312.65 345.44"
        />
        <polygon
          fill={iconColor}
          points="279.07 242.02 366.99 178 279.07 242.01 279.07 242.02"
        />
        <path
          fill={backgroundColor}
          d="M224.74,25c-110.46,0-200,89.54-200,200s89.54,200,200,200,200-89.55,200-200S335.19,25,224.74,25Zm54.33,217,4.78,14.72,28.8,88.7h0l0,.07-87.91-63.9-87.92,63.9,0-.07h0l28.8-88.7L170.4,242,82.49,178H191.16L224.74,74.65,258.32,178H367Z"
        />
        <g>
          <polygon
            fill={iconColor}
            points="224.74 74.65 191.16 178 82.49 178 170.4 242.02 170.4 242.02 165.62 256.74 136.82 345.44 136.84 345.43 224.74 281.6 312.65 345.5 312.63 345.43 283.85 256.74 279.07 242.02 279.07 242.01 366.99 178 258.32 178 224.74 74.65"
          />
        </g>
      </>
    ),
    timer: (
      <>
        <path
          fill={backgroundColor}
          d="M56.29,255A168.71,168.71,0,1,0,239.06,86.85V58.09h28.13v-30H182.81v30h28.13V86.85A168.71,168.71,0,0,0,56.29,255Zm69.3,99.4A140.58,140.58,0,1,1,225,395.55,139.65,139.65,0,0,1,125.59,354.37Z"
        />
        <path
          fill={iconColor}
          d="M337.5,255H225V142.47A112.5,112.5,0,1,0,337.5,255Z"
        />
      </>
    ),
    transaction: (
      <>
        <g>
          <g>
            <rect
              fill={backgroundColor}
              x="25"
              y="200.02"
              width="325"
              height="174.95"
            />
          </g>
          <rect
            fill={iconColor}
            x="100"
            y="75.02"
            width="325"
            height="174.95"
          />
        </g>
      </>
    ),
    trash: (
      <>
        <polygon
          fill={backgroundColor}
          points="80.59 150 100.24 425 150.88 425 179.56 425 350.24 425 369.89 150 159.91 150 131.22 150 80.59 150"
        />
        <g>
          <polygon
            fill={backgroundColor}
            points="275 108.69 275 49.68 275 42.18 275 25 175 25 175 42.18 175 49.68 175 108.69 200 108.69 200 50 250 50 250 108.69 275 108.69"
          />
        </g>
        <g>
          <rect fill={backgroundColor} x="50" y="100" width="350" height="25" />
        </g>
      </>
    ),
    up: (
      <>
        <path
          fill={backgroundColor}
          d="M411,151c-.16-.4-.32-.78-.48-1.17-.43-1.07-.86-2.14-1.3-3.2a200.81,200.81,0,0,0-56.49-76l-.57-.48c-.65-.54-1.31-1.06-2-1.59l-1.86-1.5c-.22-.17-.44-.06-.65-.23A198.76,198.76,0,0,0,225,25h-.1A199.74,199.74,0,0,0,25,224.83C25,335.42,114.54,425,225,425a199.78,199.78,0,0,0,166.65-89.54c.15-.23.29-.48.44-.71A200.73,200.73,0,0,0,411,151Z"
        />
        <polygon
          fill={iconColor}
          points="309.08 260.74 246.82 198.61 246.82 348.97 202.37 348.97 202.37 198.61 140.51 260.74 109.18 229.27 224.95 113.42 340.61 229.27 309.08 260.74"
        />
      </>
    ),
    user: (
      <>
        <g>
          <path
            fill={iconColor}
            d="M278.22,232a87.51,87.51,0,1,0-106,0A200.08,200.08,0,0,0,67.85,301.52a175.2,175.2,0,0,0,314.78,0A200.1,200.1,0,0,0,278.22,232Z"
          />
        </g>
        <path
          fill={backgroundColor}
          d="M225.24,24.86c-110.45,0-200,89.54-200,200s89.54,200,200,200,200-89.54,200-200S335.69,24.86,225.24,24.86ZM349,348.59A175.2,175.2,0,0,1,67.85,301.52,200.08,200.08,0,0,1,172.27,232a87.5,87.5,0,1,1,106,0,200.1,200.1,0,0,1,104.41,69.51A175.33,175.33,0,0,1,349,348.59Z"
        />
      </>
    ),
    wallet: (
      <>
        <g>
          <path
            fill={backgroundColor}
            d="M37.86,92.57c0-.39.11-.77.18-1.16C38,91.8,37.91,92.18,37.86,92.57Z"
          />
          <g>
            <path
              fill={iconColor}
              d="M69.71,118.16H358.83V96.77A32.23,32.23,0,0,0,326.7,64.64h-257A32.24,32.24,0,0,0,38,91.4,32.24,32.24,0,0,0,69.71,118.16Z"
            />
          </g>
          <path
            fill={backgroundColor}
            d="M37.72,93.89c0-.34.06-.68.1-1C37.78,93.21,37.75,93.55,37.72,93.89Z"
          />
          <path
            fill={backgroundColor}
            d="M37.62,95.29c0-.26,0-.51.05-.77C37.65,94.78,37.63,95,37.62,95.29Z"
          />
          <g>
            <path
              fill={iconColor}
              d="M345.48,251.79a66.93,66.93,0,0,0,66.94,66.93V184.85A66.94,66.94,0,0,0,345.48,251.79Z"
            />
          </g>
        </g>
        <path
          fill={backgroundColor}
          d="M380.29,118.16H69.71A32.24,32.24,0,0,1,38,91.4h0c-.07.39-.13.77-.18,1.16,0,.1,0,.21,0,.31,0,.33-.07.67-.1,1s0,.42,0,.63,0,.51-.05.77c0,.49,0,1,0,1.48V353.23a32.23,32.23,0,0,0,32.13,32.13H380.29a32.23,32.23,0,0,0,32.13-32.13V318.72a66.94,66.94,0,1,1,0-133.87V150.29A32.23,32.23,0,0,0,380.29,118.16Z"
        />
      </>
    ),
    like: (
      <>
        <g
          id="Group_3169"
          data-name="Group 3169"
          transform="translate(-1432.57 13987) rotate(180)">
          <path
            fill={iconColor}
            id="Path_912"
            data-name="Path 912"
            d="M73.457,0H14.692C6.613,0,0,6.859,0,15.315V291c0,8.452,6.584,15.313,14.692,15.313H73.457c8.108,0,14.692-6.862,14.692-15.313V15.315C88.149,6.859,81.535,0,73.457,0Z"
            transform="translate(-1432.57 13843.311) rotate(180)"
          />
          <path
            fill={backgroundColor}
            id="Path_913"
            data-name="Path 913"
            d="M295.788,143.689c-2.366-.418-113.15,0-113.15,0L198.112,99.68c10.676-30.4,3.764-76.807-25.861-93.307C162.6,1,149.127-1.7,138.262,1.153a24.638,24.638,0,0,0-14.972,11.7c-3.753,6.627-3.366,14.363-4.7,21.712C115.2,53.2,106.749,70.922,93.667,84.223,70.856,107.415,0,174.319,0,174.319V419.371H244.857c33.04.02,54.693-38.444,38.4-68.489,19.425-12.97,26.068-40.288,14.692-61.263,19.425-12.97,26.068-40.288,14.692-61.262C346.154,205.98,334.949,150.594,295.788,143.689Z"
            transform="translate(-1550.103 13987) rotate(180)"
          />
        </g>
      </>
    ),
    dislike: (
      <>
        <g
          id="Group_3169"
          data-name="Group 3169"
          transform="translate(1882.57 -13537)">
          <path
            fill={iconColor}
            id="Path_912"
            data-name="Path 912"
            d="M73.457,0H14.692C6.613,0,0,6.859,0,15.315V291c0,8.452,6.584,15.313,14.692,15.313H73.457c8.108,0,14.692-6.862,14.692-15.313V15.315C88.149,6.859,81.535,0,73.457,0Z"
            transform="translate(-1432.57 13843.311) rotate(180)"
          />
          <path
            fill={backgroundColor}
            id="Path_913"
            data-name="Path 913"
            d="M295.788,143.689c-2.366-.418-113.15,0-113.15,0L198.112,99.68c10.676-30.4,3.764-76.807-25.861-93.307C162.6,1,149.127-1.7,138.262,1.153a24.638,24.638,0,0,0-14.972,11.7c-3.753,6.627-3.366,14.363-4.7,21.712C115.2,53.2,106.749,70.922,93.667,84.223,70.856,107.415,0,174.319,0,174.319V419.371H244.857c33.04.02,54.693-38.444,38.4-68.489,19.425-12.97,26.068-40.288,14.692-61.263,19.425-12.97,26.068-40.288,14.692-61.262C346.154,205.98,334.949,150.594,295.788,143.689Z"
            transform="translate(-1550.103 13987) rotate(180)"
          />
        </g>
      </>
    ),
    link: (
      <>
        <g
          id="Group_3171"
          data-name="Group 3171"
          transform="translate(2018 -14468)">
          <path
            fill={iconColor}
            id="Path_48"
            data-name="Path 48"
            d="M223.282,91.443a8.226,8.226,0,0,0-11.645,0l-21.861,21.876-32.968,32.99a8.257,8.257,0,0,0,.005,11.645l2.143,2.141,16.26-16.277,16.443,16.455L175.4,176.554l2.144,2.145a8.421,8.421,0,0,0,11.636,0L244,123.834a8.253,8.253,0,0,0,0-11.646Z"
            transform="translate(-1939.174 14511.719)"
          />
          <path
            fill={iconColor}
            id="Path_46"
            data-name="Path 46"
            d="M224.995,0C100.736,0,0,100.742,0,225S100.736,450,224.995,450,450,349.256,450,225,349.254,0,224.995,0ZM338.046,184.953l-55.029,55.029a31.6,31.6,0,0,1-44.685,0l-2.156-2.156-5.859,5.859,2.151,2.151a31.636,31.636,0,0,1,0,44.689l-55.022,55.029a31.606,31.606,0,0,1-44.7,0l-20.8-20.8a31.634,31.634,0,0,1,0-44.685l55.034-55.026a31.607,31.607,0,0,1,44.694,0l2.148,2.148,5.859-5.859-2.148-2.148a31.637,31.637,0,0,1-.008-44.685l55.034-55.029a31.6,31.6,0,0,1,44.694,0l20.8,20.81A31.636,31.636,0,0,1,338.046,184.953Z"
            transform="translate(-2018.001 14468)"
          />
          <path
            fill={iconColor}
            id="Path_954"
            data-name="Path 954"
            d="M223.282,91.443a8.226,8.226,0,0,0-11.645,0l-21.861,21.876-32.968,32.99a8.257,8.257,0,0,0,.005,11.645l2.143,2.141,16.26-16.277,16.443,16.455L175.4,176.554l2.144,2.145a8.421,8.421,0,0,0,11.636,0L244,123.834a8.253,8.253,0,0,0,0-11.646Z"
            transform="matrix(-1, -0.017, 0.017, -1, -1650.743, 14892.256)"
          />
        </g>
      </>
    )
  }[type];
};
const Icon = ({ type, size, backgroundColor, iconColor, className }) => {
  return (
    <svg
      viewBox="0 0 13.552 13"
      viewBox="0 0 450 450"
      width={sizes[size]}
      className={className}
      height={sizes[size]}>
      {icons(type, backgroundColor, iconColor)}
    </svg>
  );
};

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  backgroundColor: PropTypes.string,
  iconColor: PropTypes.string
};

Icon.defaultProps = {
  size: "md",
  backgroundColor: "#091440",
  iconColor: "#c4cbd2"
};

export default Icon;
