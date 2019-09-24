import React, {FC, ReactElement} from 'react'

import {Path, Svg, Rect} from '../primitive'

export interface MobileAppIconProps {
  name: 'apple' | 'google'
}

const appIcon: { [name in MobileAppIconProps['name']]: ReactElement } = {
  'google': (
    <React.Fragment>
      <defs>
        <linearGradient id="a" x1="91.495%" x2="-38.237%" y1="4.946%" y2="71.879%">
          <stop offset="0%" stopColor="#00A0FF"/>
          <stop offset="1%" stopColor="#00A1FF"/>
          <stop offset="26%" stopColor="#00BEFF"/>
          <stop offset="51%" stopColor="#00D2FF"/>
          <stop offset="76%" stopColor="#00DFFF"/>
          <stop offset="100%" stopColor="#00E3FF"/>
        </linearGradient>
        <linearGradient id="b" x1="107.685%" x2="-130.64%" y1="50%" y2="50%">
          <stop offset="0%" stopColor="#FFE000"/>
          <stop offset="41%" stopColor="#FFBD00"/>
          <stop offset="78%" stopColor="#FFA500"/>
          <stop offset="100%" stopColor="#FF9C00"/>
        </linearGradient>
        <linearGradient id="c" x1="86.271%" x2="-50.18%" y1="17.871%" y2="194.64%">
          <stop offset="0%" stopColor="#FF3A44"/>
          <stop offset="100%" stopColor="#C31162"/>
        </linearGradient>
        <linearGradient id="d" x1="-18.825%" x2="42.086%" y1="-54.03%" y2="24.928%">
          <stop offset="0%" stopColor="#32A071"/>
          <stop offset="7%" stopColor="#2DA771"/>
          <stop offset="48%" stopColor="#15CF74"/>
          <stop offset="80%" stopColor="#06E775"/>
          <stop offset="100%" stopColor="#00F076"/>
        </linearGradient>
      </defs>
      <Path
        fill="#FFF"
        d="M77.952 24.882a4.873 4.873 0 1 0 4.885 4.862 4.793 4.793 0 0 0-4.885-4.862zm0 7.814a2.952 2.952 0 1 1 2.746-2.952 2.814 2.814 0 0 1-2.746 2.952zM67.29 24.882a4.873 4.873 0 1 0 4.885 4.862 4.793 4.793 0 0 0-4.885-4.862zm0 7.814a2.952 2.952 0 1 1 2.746-2.952 2.814 2.814 0 0 1-2.746 2.952zM54.615 26.38v2.059h4.942a4.313 4.313 0 0 1-1.144 2.597 5.056 5.056 0 0 1-3.821 1.51 5.491 5.491 0 0 1 0-10.983 5.308 5.308 0 0 1 3.752 1.476l1.453-1.453a7.207 7.207 0 0 0-5.182-2.082 7.562 7.562 0 1 0 0 15.112 6.944 6.944 0 0 0 5.273-2.116 6.864 6.864 0 0 0 1.785-4.84c.004-.428-.03-.857-.103-1.28h-6.955zm51.834 1.601a4.576 4.576 0 0 0-4.164-3.1 4.576 4.576 0 0 0-4.576 4.862 4.84 4.84 0 0 0 8.877 2.711l-1.658-1.144a2.757 2.757 0 0 1-2.391 1.339 2.46 2.46 0 0 1-2.357-1.476l6.51-2.688-.24-.504zm-6.635 1.625a2.677 2.677 0 0 1 2.551-2.849 1.876 1.876 0 0 1 1.796 1.041l-4.347 1.808zm-5.285 4.713h2.139v-14.3h-2.14v14.3zm-3.5-8.351h-.081a3.363 3.363 0 0 0-2.563-1.144 4.873 4.873 0 0 0 0 9.735c.982.02 1.922-.4 2.563-1.144h.08v.698c0 1.865-.995 2.86-2.597 2.86a2.7 2.7 0 0 1-2.46-1.727l-1.853.766a4.576 4.576 0 0 0 4.313 2.883c2.506 0 4.576-1.476 4.576-5.068v-8.66h-1.979v.8zm-2.46 6.727a2.952 2.952 0 0 1 0-5.892 2.734 2.734 0 0 1 2.608 2.94 2.723 2.723 0 0 1-2.609 2.952zM116.47 20.02h-5.125v14.3h2.139v-5.423h2.986a4.45 4.45 0 1 0 0-8.877zm0 6.864h-2.986v-4.873h3.031a2.448 2.448 0 0 1 0 4.896l-.045-.023zm13.201-2.048a3.993 3.993 0 0 0-3.81 2.185l1.888.79a2.036 2.036 0 0 1 1.957-1.041 2.06 2.06 0 0 1 2.288 1.841v.138a4.782 4.782 0 0 0-2.231-.55c-2.036 0-4.118 1.145-4.118 3.227a3.306 3.306 0 0 0 3.557 3.146 3.032 3.032 0 0 0 2.723-1.396h.069v1.144h2.059v-5.503c0-2.505-1.9-3.958-4.336-3.958l-.046-.023zm-.263 7.837c-.698 0-1.67-.355-1.67-1.213 0-1.144 1.213-1.533 2.288-1.533.68-.017 1.351.15 1.945.48a2.585 2.585 0 0 1-2.517 2.289l-.046-.023zm12.15-7.505l-2.449 6.2h-.068l-2.54-6.2h-2.288l3.81 8.672-2.174 4.816h2.23l5.858-13.488h-2.38zm-19.22 9.152h2.128v-14.3h-2.128v14.3z"
      />
      <Path
        fill="url(#a)"
        d="M11.943 8.626a2.288 2.288 0 0 0-.537 1.601v25.306a2.22 2.22 0 0 0 .537 1.601l.08.092 14.175-14.174v-.344L12.023 8.546l-.08.08z"
      />
      <Path
        fill="url(#b)"
        d="M30.888 27.776l-4.69-4.724v-.344l4.69-4.724.103.068 5.617 3.18c1.602.904 1.602 2.392 0 3.307l-5.594 3.18-.126.057z"
      />
      <Path
        fill="url(#c)"
        d="M31.025 27.708l-4.827-4.828-14.255 14.254a1.853 1.853 0 0 0 2.368.08l16.714-9.506"
      />
      <Path
        fill="url(#d)"
        d="M31.025 18.052L14.311 8.557a1.842 1.842 0 0 0-2.368.069L26.198 22.88l4.827-4.828z"
      />
      <Path
        fill="#000"
        d="M30.888 27.605l-16.577 9.438a1.899 1.899 0 0 1-2.288 0l-.08.08.08.091c.678.511 1.611.511 2.288 0l16.714-9.506-.137-.103z"
        opacity=".2"
      />
      <Path
        fill="#000"
        d="M11.943 36.974a2.288 2.288 0 0 1-.503-1.613v.172a2.22 2.22 0 0 0 .538 1.601l.08-.08-.115-.08zM36.608 24.367l-5.72 3.238.103.103 5.617-3.18a2.002 2.002 0 0 0 1.213-1.648 2.128 2.128 0 0 1-1.213 1.487z"
        opacity=".12"
      />
      <Path
        fill="#FFF"
        d="M14.311 8.717l22.297 12.676a2.128 2.128 0 0 1 1.213 1.487 2.002 2.002 0 0 0-1.213-1.647L14.311 8.557c-1.59-.915-2.905-.16-2.905 1.67v.172c.034-1.83 1.315-2.585 2.905-1.682z"
        opacity=".25"
      />
      <Path
        fill="#FFF"
        stroke="#FFF"
        strokeWidth=".5"
        d="M48.174 16.325h-.835v-2.288h.709c.646-.701.951-1.65.835-2.597V8.008h4.576v6.017h.767v2.288h-.847v-1.441h-5.205v1.453zm1.59-4.885a4.576 4.576 0 0 1-.652 2.62h3.432V8.855h-2.78v2.585zM61.101 13.98a3.546 3.546 0 0 1-5.022 0 3.672 3.672 0 0 1 0-5.08 3.546 3.546 0 0 1 5.022 0 3.524 3.524 0 0 1 1.018 2.54 3.432 3.432 0 0 1-1.018 2.54zm-4.381-.572a2.54 2.54 0 0 0 1.864.778 2.505 2.505 0 0 0 1.865-.778 2.906 2.906 0 0 0 0-3.936 2.505 2.505 0 0 0-1.865-.778 2.54 2.54 0 0 0-1.864.778 2.94 2.94 0 0 0 0 3.936zM66.558 15.02a3.432 3.432 0 0 1-2.494-1.017 3.707 3.707 0 0 1 0-5.126 3.432 3.432 0 0 1 2.54-1.018c.97-.027 1.899.395 2.516 1.144l-.606.595a2.288 2.288 0 0 0-1.91-.88c-.712-.019-1.4.259-1.9.766a2.94 2.94 0 0 0 0 3.958c.5.507 1.188.785 1.9.766a2.7 2.7 0 0 0 2.036-1.018l.618.607c-.314.375-.704.68-1.144.892a3.535 3.535 0 0 1-1.556.332zM72.85 14.872h-.881V8.855h-1.922v-.847h4.713v.847h-1.91zM80.824 8.008l-2.597 5.789a1.659 1.659 0 0 1-2.288 1.075l.229-.812c.14.078.297.122.457.126a.824.824 0 0 0 .48-.126c.14-.116.246-.266.31-.435l.251-.55-2.288-5.067h1.041l1.693 3.935 1.67-3.935h1.042zM81.819 14.872V8.008h4.965v6.864h-.881V8.855H82.7v6.017zM88.351 14.872V8.008h.881v2.94h3.432v-2.94h.892v6.864h-.892v-3.1h-3.432v3.1zM100.74 13.98a3.558 3.558 0 0 1-5.033 0 3.672 3.672 0 0 1 0-5.08 3.546 3.546 0 0 1 5.022 0 3.695 3.695 0 0 1 0 5.08h.012zm-4.38-.572c.484.51 1.16.792 1.864.778a2.54 2.54 0 0 0 1.865-.778 2.94 2.94 0 0 0 0-3.936 2.54 2.54 0 0 0-1.865-.778 2.505 2.505 0 0 0-1.865.778 2.906 2.906 0 0 0 0 3.936zM105.351 14.872V8.008h2.482a2.06 2.06 0 0 1 1.396.526c.387.336.605.826.595 1.339.003.308-.085.61-.252.87-.169.245-.402.439-.675.56.33.113.62.32.835.595.21.28.323.622.32.972a1.796 1.796 0 0 1-.617 1.396c-.397.37-.922.57-1.464.56l-2.62.046zm.88-3.924h1.602a.995.995 0 0 0 .801-.332c.194-.19.305-.449.31-.72a1.064 1.064 0 0 0-.264-.744.972.972 0 0 0-.766-.32h-1.648l-.034 2.116zm0 3.077h1.785c.314.011.616-.12.824-.354.198-.211.308-.49.309-.778a1.144 1.144 0 0 0-.32-.767 1.144 1.144 0 0 0-.858-.354h-1.74v2.253z"
      />
    </React.Fragment>
  ),
  'apple': (
    <React.Fragment>
      <Path
        fill="#fff"
        d="M28.336 22.08a5.661 5.661 0 0 1 2.696-4.75 5.795 5.795 0 0 0-4.566-2.468c-1.921-.202-3.784 1.15-4.763 1.15-.998 0-2.505-1.13-4.128-1.097a6.08 6.08 0 0 0-5.117 3.12c-2.212 3.831-.562 9.461 1.557 12.557 1.06 1.517 2.3 3.21 3.922 3.15 1.586-.066 2.179-1.012 4.094-1.012 1.898 0 2.454 1.012 4.108.974 1.703-.028 2.776-1.523 3.8-3.054a12.54 12.54 0 0 0 1.736-3.537 5.47 5.47 0 0 1-3.34-5.033zM25.21 12.825a5.574 5.574 0 0 0 1.276-3.993 5.671 5.671 0 0 0-3.67 1.899 5.304 5.304 0 0 0-1.308 3.845 4.69 4.69 0 0 0 3.703-1.75z"
      />
      <Path
        fill="#fff"
        d="M48.394 29.904h-5.415l-1.3 3.84h-2.294l5.129-14.207h2.383l5.129 14.207h-2.333l-1.3-3.84zm-4.854-1.772h4.292L45.716 21.9h-.06l-2.116 6.232zM63.103 28.565c0 3.219-1.723 5.287-4.323 5.287a3.511 3.511 0 0 1-3.259-1.812h-.049v5.13h-2.126V23.386h2.058v1.723h.04a3.674 3.674 0 0 1 3.297-1.831c2.629 0 4.362 2.078 4.362 5.287zm-2.186 0c0-2.097-1.083-3.475-2.737-3.475-1.624 0-2.717 1.407-2.717 3.475 0 2.087 1.093 3.485 2.717 3.485 1.654 0 2.737-1.369 2.737-3.485zM74.502 28.565c0 3.219-1.722 5.287-4.322 5.287a3.511 3.511 0 0 1-3.259-1.812h-.049v5.13h-2.126V23.386h2.058v1.723h.039a3.674 3.674 0 0 1 3.298-1.831c2.629 0 4.361 2.078 4.361 5.287zm-2.185 0c0-2.097-1.083-3.475-2.737-3.475-1.624 0-2.717 1.407-2.717 3.475 0 2.087 1.093 3.485 2.717 3.485 1.654 0 2.737-1.369 2.737-3.485zM82.037 29.785c.157 1.41 1.526 2.334 3.396 2.334 1.792 0 3.081-.925 3.081-2.195 0-1.103-.777-1.763-2.618-2.216l-1.842-.443c-2.608-.63-3.82-1.85-3.82-3.83 0-2.45 2.137-4.135 5.17-4.135 3.002 0 5.06 1.684 5.129 4.135h-2.146c-.129-1.418-1.3-2.273-3.013-2.273-1.713 0-2.885.866-2.885 2.126 0 1.004.749 1.595 2.58 2.047l1.565.385c2.915.69 4.126 1.86 4.126 3.938 0 2.658-2.117 4.322-5.485 4.322-3.15 0-5.277-1.625-5.415-4.195h2.177zM95.348 20.935v2.451h1.97v1.684h-1.97v5.71c0 .887.394 1.3 1.26 1.3.234-.004.468-.02.7-.05v1.674c-.39.073-.785.106-1.181.099-2.097 0-2.915-.788-2.915-2.797V25.07h-1.506v-1.684h1.506v-2.451h2.136zM98.458 28.565c0-3.258 1.92-5.306 4.913-5.306 3.003 0 4.913 2.047 4.913 5.306 0 3.268-1.9 5.307-4.913 5.307-3.012 0-4.913-2.039-4.913-5.307zm7.66 0c0-2.235-1.025-3.555-2.747-3.555-1.723 0-2.746 1.33-2.746 3.555 0 2.245 1.023 3.554 2.746 3.554 1.722 0 2.747-1.31 2.747-3.554zM110.037 23.386h2.028v1.763h.049a2.47 2.47 0 0 1 2.491-1.871c.245-.001.49.025.728.079v1.989a2.972 2.972 0 0 0-.955-.129 2.142 2.142 0 0 0-2.215 2.383v6.144h-2.126V23.386zM125.136 30.701c-.286 1.88-2.117 3.171-4.46 3.171-3.013 0-4.883-2.019-4.883-5.257 0-3.25 1.88-5.356 4.793-5.356 2.866 0 4.668 1.968 4.668 5.109v.728h-7.315v.128a2.698 2.698 0 0 0 2.786 2.934 2.343 2.343 0 0 0 2.392-1.457h2.019zm-7.187-3.09h5.178a2.49 2.49 0 0 0-2.54-2.63 2.622 2.622 0 0 0-2.638 2.63z"
      />
      <Path
        fill="#fff"
        d="M41.717 11.73h.912a1.146 1.146 0 0 0 1.287-1.088c0-.63-.473-1.036-1.277-1.036a1.217 1.217 0 0 0-1.377 1.069H40.26a2.14 2.14 0 0 1 2.412-1.997c1.344 0 2.29.753 2.29 1.836a1.586 1.586 0 0 1-1.24 1.561v.08a1.59 1.59 0 0 1 1.518 1.651 2.28 2.28 0 0 1-2.55 2.03 2.269 2.269 0 0 1-2.563-2.02h1.018c.061.653.661 1.074 1.546 1.074s1.462-.473 1.462-1.14c0-.677-.544-1.093-1.495-1.093h-.941v-.927zM46.397 14.213c0-.927.691-1.461 1.915-1.537l1.396-.08v-.445c0-.545-.359-.852-1.055-.852-.567 0-.96.209-1.073.573h-.985c.104-.885.938-1.453 2.106-1.453 1.292 0 2.02.643 2.02 1.732v3.52h-.98v-.725h-.08a1.733 1.733 0 0 1-1.547.81 1.556 1.556 0 0 1-1.717-1.543zm3.31-.44v-.43l-1.257.08c-.71.047-1.031.289-1.031.743 0 .464.402.733.955.733a1.214 1.214 0 0 0 1.334-1.126zM53.42 11.375v4.295h-1.017V10.52h3.391v.856zM61.956 13.092c0 1.637-.828 2.663-2.129 2.663a1.68 1.68 0 0 1-1.585-.865h-.08v2.493h-1.017v-6.864h.979v.851h.076a1.79 1.79 0 0 1 1.617-.937c1.31 0 2.139 1.022 2.139 2.66zm-1.046 0c0-1.088-.515-1.745-1.376-1.745-.856 0-1.391.671-1.391 1.75 0 1.073.535 1.745 1.386 1.745.866 0 1.38-.657 1.38-1.75zM63.31 17.515v-.875c.11.014.22.02.331.019a.881.881 0 0 0 .932-.719l.076-.25-1.865-5.171h1.108l1.291 4.092h.08l1.288-4.092h1.078l-1.92 5.364c-.44 1.254-.928 1.656-1.978 1.656a4.44 4.44 0 0 1-.421-.024zM68.42 14.208h1.013c.1.455.525.691 1.12.691.677 0 1.093-.298 1.093-.762 0-.496-.373-.733-1.093-.733h-.77v-.79h.757c.615 0 .927-.236.927-.667 0-.378-.302-.667-.927-.667-.569 0-.984.242-1.05.648h-.98a1.805 1.805 0 0 1 2.03-1.509c1.224 0 1.925.554 1.925 1.424.012.5-.327.94-.813 1.055v.08a1.156 1.156 0 0 1 1.007 1.16c0 .979-.833 1.627-2.106 1.627-1.125 0-2.038-.516-2.132-1.557zM74.123 15.67V10.52h1.008v3.543h.08l2.375-3.543h1.007v5.151h-1.007v-3.562h-.076L75.13 15.67zM84.145 11.375h-1.623v4.295h-1.017v-4.295h-1.623v-.856h4.263zM89.621 14.28a2.093 2.093 0 0 1-2.233 1.49 2.34 2.34 0 0 1-2.38-2.66 2.376 2.376 0 0 1 2.375-2.69c1.434 0 2.3.979 2.3 2.596v.355h-3.638v.057a1.36 1.36 0 0 0 1.372 1.476c.497.06.98-.187 1.224-.625h.98zm-3.576-1.66h2.6a1.243 1.243 0 0 0-1.266-1.335 1.316 1.316 0 0 0-1.334 1.334zM93.931 10.519h2.323c1.007 0 1.598.51 1.598 1.31.004.522-.36.976-.87 1.088v.08c.625.04 1.11.562 1.102 1.188 0 .899-.676 1.485-1.807 1.485h-2.346V10.52zm1.008.78v1.334h1.008c.614 0 .908-.236.908-.672 0-.401-.256-.662-.796-.662h-1.12zm0 2.082v1.509h1.205c.601 0 .923-.265.923-.753 0-.515-.364-.756-1.05-.756h-1.078z"
      />
    </React.Fragment>
  ),
}

export const MobileAppIcon: FC<MobileAppIconProps> = ({name}) => (
  <Svg viewBox="0 0 156 46" width={1} height={1} focusable="false">
    <Rect width="155.584" height="45.76" fill="#000" rx="5.5"/>
    {appIcon[name]}
  </Svg>
)
