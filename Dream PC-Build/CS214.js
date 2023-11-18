const cpuSPECS = 'The Intel Core i9-11900K is a high-performance desktop processor with 8 cores, 16 threads, and notable clock speeds, designed for demanding computing tasks and gaming.';

const moboSPECS = 'Intel Z590 ATX gaming motherboard with 14+2 power stages, PCIe 4.0, Onboard WiFi 6E (802.11ax), Dual Intel® 2.5 Gb Ethernet, Quad M.2 with heatsinks and embedded backplates, Dual onboard Thunderbolt 4, USB 3.2 Gen 2x2 front-panel connector and Aura Sync RGB lighting.';

const psuSPECS =`The ROG Thor 1000W Platinum II EVA Edition is a power supply unit (PSU) from ASUS, designed for high-end gaming setups, featuring a 1000W power output, Platinum efficiency, and ASUS's Republic of Gamers (ROG) aesthetics, with added EVA foam for noise reduction and enhanced durability.`;

const ramSPECS = 'The G.Skill Trident Z RGB RAM is a 32GB (2x16GB) DDR4-3600 memory kit, known for its high performance, stylish RGB lighting, and sleek Trident Z design, offering fast data transfer rates suitable for gaming and content creation.';

const gpuSPECS = `
The ASUS ROG STRIX GeForce RTX 3080 12GB EVA EDITION is a powerful graphics card tailored for gaming and graphics-intensive tasks, featuring NVIDIA's RTX 3080 GPU, 12GB VRAM, and ASUS's signature Republic of Gamers (ROG) STRIX design, likely with special features or aesthetics tied to the "EVA EDITION" branding.`;

const ssdSPECS = 'The WD_BLACK 1TB SN850 NVMe Internal Gaming SSD is a high-performance solid-state drive designed for gaming, featuring Gen4 PCIe connectivity, M.2 2280 form factor, 3D NAND technology, and impressive read speeds of up to 7,000 MB/s, offering quick data access and load times for gaming applications.';

const hddSPECS = 'The WD Black 5TB Performance Desktop Hard Disk Drive is a high-capacity traditional hard disk drive (HDD) designed for desktop use, featuring a 7200 RPM rotational speed, SATA 6 Gb/s interface, 128MB cache, and a 3.5-inch form factor.';

const caseSPECS = 'The ROG Strix Helios is a mid-tower gaming case designed for ATX/EATX motherboards, featuring tempered glass panels, an aluminum frame, GPU braces for added support, support for a 420mm radiator, and customizable RGB lighting with Aura Sync compatibility, providing a premium and functional enclosure for gaming setups.';

const coolerSPECS= `
The ROG Ryujin is an all-in-one liquid CPU cooler that features a color OLED display, Aura Sync RGB lighting for customizable aesthetics, and is equipped with Noctua iPPC 2000 PWM 120mm radiator fans for efficient cooling performance. This cooler provides both functional cooling capabilities and visual customization options for gaming setups.`;

const fanSPECS = `
The LL120 RGB 120mm Dual Light Loop RGB LED PWM Fan is a product package that includes three 120mm fans with dual light loops, offering vibrant RGB lighting effects. The package also comes with a Lighting Node PRO, which is a lighting controller for customizable RGB lighting.`;

const keyboardSPECS = `
The ROG Strix Scope II RX is a gaming keyboard featuring pre-lubed ROG RX optical switches for responsive keystrokes, IP57 waterproof protection for durability, sound-dampening foam for a quieter typing experience, and a choice between PBT doubleshot keycaps or UV-coated ABS keycaps for customization.`;

const monitorSPECS = 'The ROG Strix XG35VQ is a curved gaming monitor featuring a 35-inch UWQHD display with a resolution of 3440x1440. It offers a 100Hz refresh rate, Adaptive-Sync (FreeSync™) technology for tear-free gaming, and Extreme Low Motion Blur.';

const mouseSPECS = 'This gaming mouse is a classic asymmetrical design with tri-mode connectivity, supporting 2.4 GHz wireless, Bluetooth, and wired connections. It features a specially tuned 19,000 DPI sensor for precise tracking, zero-click latency, and exclusive Push-Fit Switch Socket II for customizable switches.';

const mousepadSPECS = `
The NEON X RGB Gaming Mouse Pad is a gaming accessory designed with customizable RGB lighting. This mouse pad typically features LED illumination around the edges, providing vibrant and customizable lighting effects to enhance the gaming atmosphere.`;

const webcamSPECS = `
It offers Ultra 4K HD video quality, a noise-canceling microphone for clear audio, HD auto light correction for optimal visuals in varying lighting conditions, a wide field of view, and compatibility with popular video conferencing platforms such as Microsoft Teams, Zoom, and Google Voice.`;

const headsetSPECS = 'The ROG Delta is an RGB gaming headset featuring a Hi-Res ESS Quad-DAC for high-quality audio, circular RGB lighting effects for a visually dynamic experience, and a USB-C connector. It provides a versatile and immersive audio solution for gaming across different platforms.';

const micSPECS = 'The HyperX QuadCast S is a USB microphone designed for professional-grade audio recording and streaming. It features a USB connection for easy plug-and-play functionality, and it comes with additional features such as a built-in shock mount, pop filter, and customizable RGB lighting for added aesthetics.';

const soundbarSPECS = `The Razer Leviathan V2 Pro has five full-range 2” drivers supported by a down-firing subwoofer. It also has a custom 10-band EQ that allows you to adjust the sound to your liking. The soundbar has a maximum SPL of 98 dB, which makes it loud enough to fill a large room with sound.`;

function getData(iMAGE,values){
    const imahe = document.querySelector(`#${iMAGE}`);
    const mod = document.querySelector('.modal');
    const popUP = document.querySelector('.popup');
    popUP.innerHTML = `
        <div class="container">
        ${imahe.outerHTML}
        </div>
        <div class="container2">
        <p>${values}</p>
        </div>
        <button onclick="removeClass()"
         class="exit-btn">X</button>
    `;
    mod.classList.add('modal-view');
    popUP.classList.add('popup-view');   
}
function removeClass(){
    document.querySelector('.modal').classList.remove('modal-view');
    document.querySelector('.popup').classList.remove('popup-view');
}