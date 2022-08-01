import DOMTools from './DOMTools.js';

// Choice lang

document.querySelector('#choiceLangage .buttonDropdown').addEventListener('click', e => {
    if (!document.getElementById('choiceLangage').classList.toggle('show')) return;
    window.addEventListener('click', function click(e) {
        if (e.target.matches('.buttonDropdown')) return;
        document.getElementById('choiceLangage').classList.remove('show');
        this.removeEventListener('click', click);
    });
});

// Main

// const main = document.querySelector('main');


// DOMTools.pushCategory(main, {
//     header: {
//         name: 'Croissance',
//         iconPath: 'IconMenu/growth.png'
//     },
//     description: 'La catégorie Croissance est consituée de sept sous-catégories',
//     content: [
//         {
//             name: 'Or',
//             iconPath: 'iconMenu/iconGrowth/stat.png',
//             id: 'btnGrowthGold'
//         },
//         {
//             name: 'Compétances',
//             iconPath: 'iconMenu/iconGrowth/emblem.png',
//             id: 'btnGrowthExp'
//         },
//         {
//             name: 'Niveau suppérieure',
//             iconPath: 'iconMenu/iconGrowth/level.png',
//             id: 'btnGrowthLevel'
//         },
//         {
//             name: 'Améliorer',
//             iconPath: 'iconMenu/iconGrowth/level.png',
//             id: 'btnGrowthRankup'
//         },
//         {
//             name: "Amélioration de l'égo",
//             iconPath: 'iconMenu/iconGrowth/ego.png',
//             id: 'btnGrowthEgo'
//         },
//         {
//             name: 'Emblèmes',
//             iconPath: 'iconMenu/iconGrowth/emblem.png',
//             id: 'btnGrowthEmblem'
//         },
//         {
//             name: 'Insigne',
//             iconPath: 'iconMenu/iconGrowth/pattern.png',
//             id: 'btnGrowthPattern'
//         }
//     ]
// });