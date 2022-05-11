const quiz = [
  {
    question: 'サウナ前に事前に温泉で体を温めておく事をサウナー達は何と呼んでいる？',
    answers: [
      '予熱',
      '湯通し',
      '煮込み',
      'ウォーミングアップ'
    ],
    correct: '湯通し'
  }, {
    question: 'サウナと水風呂を繰り返していると体表面に現れる、赤いまだら模様のようなものを何と言う？',
    answers: [
      'からみ',
      'うまみ',
      'つらみ',
      'あまみ'
    ],
    correct: 'あまみ'
  }, {
    question: '「北の聖地」や「サウナ界のラスボス」と呼ばれ、冬には雪ダイブできる施設はどこ？',
    answers: [
      'ニコーリフレ',
      'あしべ屯田',
      '北海道ホテル',
      '白銀荘'
    ],
    correct: '白銀荘'
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    //ここに命令
    buttonIndex++;
  }
}
setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解！');
    score++;
  } else {
    window.alert('不正解！');
  }

  quizIndex++;

  if(quizIndex < quizLength){
    //問題数がまだあればこちらを実行
    setupQuiz();
  } else if (score === 3){
    //問題数がもうなければこちらを実行
    //点数に合わせてメッセージを変化
      window.alert(score + "点：満点！立派なサウナーです！");
  } else if(score === 2) {
      window.alert(score + "点：真のサウナーまであと1歩！");
  } else if(score === 1) {
      window.alert(score + "点：サウナ好きなら点数は関係ない！");
  } else {
      window.alert(score + "点：とりあえずサウナ行こう！");
  }   
};



//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while(handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}