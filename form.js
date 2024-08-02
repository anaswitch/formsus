
const tooltipElements = document.querySelectorAll('.tooltip');

const tooltipTexts = document.querySelectorAll('.tooltipcpftext, .tooltipcnstext, .tooltipsinantext, .tooltipprontuariotext, .tooltipidsocialtext, .tooltipnameciviltext, .tooltipnamesocialtext, .tooltipnamemaetext, .tooltipdatanasctext, .tooltipracatext, .tooltipsexonasctext, .tooltipidgenerotext, .tooltiporisexualtext, .tooltipcidadeuftext, .tooltippaisnasctext, .tooltipnacitext, .tooltipsituacaotext, .tooltipescolaridadetext, .tooltiplocaltext, .tooltipliberdadeprivtext, .tooltipcontatosntext, .tooltipoxtipocontatostext, .tooltipassinaturatext, .tooltipenderecotext, .tooltipbairrotext, .tooltipceptext, .tooltipresidenciauftext, .tooltipemailtextm, .tooltiptiptelefonestext, .tooltipobstext, .tooltipacomptext, .tooltippessoastext, .tooltippreenchimentotext, .tooltippreenchimentosustext, .tooltipassinaturausutext');

function showTooltip(event) {

    const tooltipText = event.currentTarget.querySelector('.tooltipcpftext, .tooltipcnstext, .tooltipsinantext, .tooltipprontuariotext, .tooltipidsocialtext, .tooltipnameciviltext, .tooltipnamesocialtext, .tooltipnamemaetext, .tooltipdatanasctext, .tooltipracatext, .tooltipsexonasctext, .tooltipidgenerotext, .tooltiporisexualtext, .tooltipcidadeuftext, .tooltippaisnasctext, .tooltipnacitext, .tooltipsituacaotext, .tooltipescolaridadetext, .tooltiplocaltext, .tooltipliberdadeprivtext, .tooltipcontatosntext, .tooltipoxtipocontatostext, .tooltipassinaturatext, .tooltipenderecotext, .tooltipbairrotext, .tooltipceptext, .tooltipresidenciauftext, .tooltipemailtext, .tooltiptiptelefonestext, .tooltipobstext, .tooltipacomptext, .tooltippessoastext, .tooltippreenchimentotext, .tooltippreenchimentosustext, .tooltipassinaturausutext');
    if (tooltipText) {
        tooltipText.style.visibility = 'visible';
        tooltipText.style.opacity = '1';
    }
}

function hideTooltip(event) {

    const tooltipText = event.currentTarget.querySelector('.tooltipcpftext, .tooltipcnstext, .tooltipsinantext, .tooltipprontuariotext, .tooltipidsocialtext, .tooltipnameciviltext, .tooltipnamesocialtext, .tooltipnamemaetext, .tooltipdatanasctext, .tooltipracatext, .tooltipsexonasctext, .tooltipidgenerotext, .tooltiporisexualtext, .tooltipcidadeuftext, .tooltippaisnasctext, .tooltipnacitext, .tooltipsituacaotext, .tooltipescolaridadetext, .tooltiplocaltext, .tooltipliberdadeprivtext, .tooltipcontatosntext, .tooltipoxtipocontatostext, .tooltipassinaturatext, .tooltipenderecotext, .tooltipbairrotext, .tooltipceptext, .tooltipresidenciauftext, .tooltipemailtext, .tooltiptiptelefonestext, .tooltipobstext, .tooltipacomptext, .tooltippessoastext, .tooltippreenchimentotext, .tooltippreenchimentosustext, .tooltipassinaturausutext');
    if (tooltipText) {
        tooltipText.style.visibility = 'hidden';
        tooltipText.style.opacity = '0';
    }
}


tooltipElements.forEach(tooltipElement => {
    tooltipElement.addEventListener('mouseover', showTooltip);
    tooltipElement.addEventListener('mouseout', hideTooltip);
});