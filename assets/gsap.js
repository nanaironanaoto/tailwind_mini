//console.log('test');
document.addEventListener('DOMContentLoaded', function() {




    // gsap.to('.target', { // .box => アニメーションさせる要素
    //     x: 400, // アニメーションの内容
    //     scrollTrigger: {
    //       trigger: '.target', // トリガーとなる要素（アニメーションの開始、終了の位置決定に使用する）
    //       start: 'center center', // アニメーションの開始位置の指定
    //       toggleActions: 'play none none reverse', // スクロールアップでアニメーションを逆再生
    //     }
    //   });




        // waveBoundクラスを持つ要素のテキストを1文字ずつ<span>で囲む
        document.querySelectorAll('.waveBound').forEach(element => {
            let chars = element.textContent.split('').map(char => `<span>${char}</span>`).join('');
            element.innerHTML = chars;
        });

        // 各<span>にアニメーションを適用
        gsap.utils.toArray('.waveBound span').forEach((span, i) => {
            gsap.fromTo(span, 
                { y: 0, opacity: 0 },
                { y: -20, opacity: 1, duration: 0.5, ease: "bounce.out", delay: i * 0.2 });
        });






});

