angular.module('techfestApp', [])
.controller('MainCtrl', ['$scope','$interval', function($scope, $interval){
  var vm = this;
  vm.navOpen = false;
  vm.year = new Date().getFullYear();
  vm.eventDates = 'Jan 2–4, 2027';

  // ---- Countdown ----
  var target = new Date('2027-01-02T09:00:00');
  vm.countdown = { days:'00', hours:'00', mins:'00', secs:'00' };
  function pad(n){ return n < 10 ? '0'+n : ''+n; }
  function tick(){
    var diff = target - new Date();
    if(diff < 0){ diff = 0; }
    var days = Math.floor(diff / (1000*60*60*24));
    var hours = Math.floor((diff / (1000*60*60)) % 24);
    var mins = Math.floor((diff / (1000*60)) % 60);
    var secs = Math.floor((diff / 1000) % 60);
    vm.countdown = { days: pad(days), hours: pad(hours), mins: pad(mins), secs: pad(secs) };
  }
  tick();
  $interval(tick, 1000);

  // ---- Stats ----
  vm.stats = [
    { value:'100K+', label:'Footfalls on campus' },
    { value:'75+',   label:'Countries represented' },
    { value:'₹50L+', label:'Total prize pool' },
    { value:'80+',   label:'Events & workshops' }
  ];

  // ---- Events ----
  vm.events = [
    { category:'Robotics', icon:'⚙️', name:'Robowars', desc:'Design and pilot a combat bot to survive the arena and knock out the competition.', prize:'₹4,00,000' },
    { category:'Coding', icon:'💻', name:'CodeStorm', desc:'A 24-hour competitive programming marathon across algorithmic and systems rounds.', prize:'₹1,50,000' },
    { category:'Hackathon', icon:'🚀', name:'Hack the Fest', desc:'Build a working product in 36 hours across open, fintech and climate tracks.', prize:'₹3,00,000' },
    { category:'Aerospace', icon:'🛩️', name:'Drone Combat', desc:'Pilot custom-built drones through obstacle circuits and elimination duels.', prize:'₹2,00,000' },
    { category:'AI & Data', icon:'🧠', name:'AI Summit Challenge', desc:'Solve an open dataset problem statement judged by researchers and industry mentors.', prize:'₹1,75,000' },
    { category:'Astronomy', icon:'🔭', name:'Astro Night', desc:'A campus-wide stargazing and rocketry showcase capped with a telescope build contest.', prize:'₹1,00,000' }
  ];

  // ---- Schedule ----
  vm.activeDay = 1;
  vm.schedule = [
    { id:1, label:'Day 01 · Fri', items:[
      { time:'09:00', title:'Gates Open & Registration', desc:'Badge pickup and campus orientation at the main gate.', loc:'Main Gate, IIT Bombay' },
      { time:'11:00', title:'Opening Ceremony', desc:'Kick-off address and lighting of the inaugural spark.', loc:'Convocation Hall' },
      { time:'14:00', title:'Robowars — Qualifiers', desc:'First round of combat robotics eliminations begin.', loc:'Robotics Arena' },
      { time:'19:00', title:'Welcome Concert', desc:'Live sets from student bands to open the fest.', loc:'Open Air Theatre' }
    ]},
    { id:2, label:'Day 02 · Sat', items:[
      { time:'09:00', title:'Hack the Fest Begins', desc:'36-hour build sprint kicks off with track briefings.', loc:'Hackathon Hub' },
      { time:'11:30', title:'Keynote: Frontiers of Robotics', desc:'A talk from a leading robotics researcher.', loc:'Convocation Hall' },
      { time:'15:00', title:'CodeStorm — Finals', desc:'Top competitors face the final algorithmic round.', loc:'CSE Building' },
      { time:'21:00', title:'Astro Night', desc:'Telescope viewing and rocketry showcase under the stars.', loc:'Football Ground' }
    ]},
    { id:3, label:'Day 03 · Sun', items:[
      { time:'10:00', title:'Drone Combat Finals', desc:'Elimination duels for the aerospace crown.', loc:'Drone Arena' },
      { time:'13:00', title:'Hack the Fest — Demos', desc:'Teams present working builds to the judging panel.', loc:'Hackathon Hub' },
      { time:'17:00', title:'Robowars — Grand Finale', desc:'The last two bots battle for the championship.', loc:'Robotics Arena' },
      { time:'20:00', title:'Closing Concert & Awards', desc:'Prize distribution followed by the closing headline act.', loc:'Open Air Theatre' }
    ]}
  ];

  // ---- Speakers ----
  vm.speakers = [
    { initials:'RK', name:'Dr. R. Kapoor', role:'Robotics Researcher', bg:'linear-gradient(135deg,#ff6fa5,#ffd23f)' },
    { initials:'AN', name:'A. Nair', role:'Founder, Climate Deep-Tech Startup', bg:'linear-gradient(135deg,#e8437e,#ff9fc4)' },
    { initials:'SV', name:'S. Verma', role:'AI Research Lead', bg:'linear-gradient(135deg,#ffd23f,#ff9fc4)' },
    { initials:'MT', name:'M. Thomas', role:'Aerospace Engineer', bg:'linear-gradient(135deg,#ff6fa5,#f0af00)' }
  ];

  // ---- Sponsors marquee ----
  vm.sponsors = ['NovaChip','OrbitalWorks','QuantumEdge','Brightline Robotics','Helios Energy','Vertex Labs','Northstar Systems','PixelForge'];
  vm.sponsorsDouble = vm.sponsors.concat(vm.sponsors);

  // ---- Newsletter ----
  vm.subscribed = false;
  vm.subscribe = function(){
    if(vm.email){
      vm.subscribed = true;
      vm.email = '';
    }
  };
}]);