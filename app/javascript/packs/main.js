class LinkMenu {
  constructor() {
      this.DOM = {};
      this.DOM.btn = document.querySelector('.mobile-menu__btn');
      this.DOM.char = document.querySelector('.mobile-menu__btn1');
      this.DOM.name = document.querySelector(".main-name");
      this.DOM.content = document.querySelector(".content-name")
      this.DOM.cover = document.querySelector('.mobile-menu__cover');
      this.DOM.container = document.querySelector('#global-container');
      this.DOM.topBtn = document.querySelector('.top-page_btn');
      this.DOM.page1Btn = document.querySelector('.menu-1');
      this.DOM.page2Btn = document.querySelector('.menu-2');
      this.DOM.page3Btn = document.querySelector('.menu-3');
      this.DOM.page4Btn = document.querySelector('.menu-4');
      this.DOM.profile = document.querySelector('.profile-page');
      this.DOM.top = document.querySelector('.top-page');
      this.DOM.works = document.querySelector('.works-page');
      this.DOM.skill = document.querySelector('.skill-page');
      this.DOM.prfBtn = document.querySelector('.profile-btn');
      this.DOM.backBtn = document.querySelector('.back-btn');
      this.DOM.backBtnWks = document.querySelector('.back-btn-works');
      this.DOM.backBtnSkill = document.querySelector('.back-btn-skill');
      this.DOM.wksBtn = document.querySelector('.works-btn');
      this.DOM.skillBtn = document.querySelector('.skill-btn');
      this._addEvent();
  }

 

  _toggle() {
      this.DOM.container.classList.toggle('menu-open');
      this.DOM.char.classList.toggle('menu-open');
      this.DOM.name.classList.toggle('menu-open');
      this.DOM.content.classList.toggle('menu-open');
      this.DOM.topBtn.classList.toggle('menu-open');
  }
  _addProf(){
    if(this.DOM.top.classList.contains("in-profile")== true ||this.DOM.top.classList.contains("in-skill") || this.DOM.top.classList.contains("in-works") ){
        this.DOM.top.classList.remove("in-skill");
        this.DOM.profile.classList.remove("in-skill");
        this.DOM.works.classList.remove("in-skill");
        this.DOM.skill.classList.remove("in-skill");
        this.DOM.top.classList.remove("in-works");
        this.DOM.profile.classList.remove("in-works");
        this.DOM.works.classList.remove("in-works");
        this.DOM.skill.classList.remove("in-works");
    }
    this.DOM.profile.classList.add('in-profile')
    this.DOM.top.classList.add('in-profile')
    this.DOM.works.classList.add('in-profile')
    this.DOM.skill.classList.add('in-profile')
  }
  _addWorks(){
    if(this.DOM.top.classList.contains("in-profile")== true ||this.DOM.top.classList.contains("in-skill") || this.DOM.top.classList.contains("in-works") ){
        this.DOM.top.classList.remove("in-profile");
        this.DOM.profile.classList.remove("in-profile");
        this.DOM.works.classList.remove("in-profile");
        this.DOM.skill.classList.remove("in-profile");
        this.DOM.top.classList.remove("in-skill");
        this.DOM.profile.classList.remove("in-skill");
        this.DOM.works.classList.remove("in-skill");
        this.DOM.skill.classList.remove("in-skill");
    }
    this.DOM.profile.classList.add('in-works');
    this.DOM.top.classList.add('in-works');
    this.DOM.works.classList.add('in-works');
    this.DOM.skill.classList.add('in-works');
  }
  _addTop(){
      if(this.DOM.top.classList.contains("in-profile")== true ||this.DOM.top.classList.contains("in-skill") || this.DOM.top.classList.contains("in-works") ){
        this.DOM.top.classList.remove("in-profile");
        this.DOM.profile.classList.remove("in-profile");
        this.DOM.works.classList.remove("in-profile");
        this.DOM.skill.classList.remove("in-profile");
        this.DOM.top.classList.remove("in-skill");
        this.DOM.profile.classList.remove("in-skill");
        this.DOM.works.classList.remove("in-skill");
        this.DOM.skill.classList.remove("in-skill");
        this.DOM.top.classList.remove("in-works");
        this.DOM.profile.classList.remove("in-works");
        this.DOM.works.classList.remove("in-works");
        this.DOM.skill.classList.remove("in-works");
      }
  }
  _addSkill(){
    if(this.DOM.top.classList.contains("in-profile")== true ||this.DOM.top.classList.contains("in-skill") || this.DOM.top.classList.contains("in-works") ){
        this.DOM.top.classList.remove("in-profile");
        this.DOM.profile.classList.remove("in-profile");
        this.DOM.works.classList.remove("in-profile");
        this.DOM.top.classList.remove("in-works");
        this.DOM.profile.classList.remove("in-works");
        this.DOM.works.classList.remove("in-works");
    }
    this.DOM.profile.classList.add('in-skill');
    this.DOM.top.classList.add('in-skill');
    this.DOM.works.classList.add('in-skill');
    this.DOM.skill.classList.add('in-skill');
  }
  _addEvent() {
      this.DOM.btn.addEventListener("click", this._toggle.bind(this));
      this.DOM.cover.addEventListener("click", this._toggle.bind(this));
      this.DOM.page1Btn.addEventListener("click",this._toggle.bind(this));
      this.DOM.page1Btn.addEventListener("click",this._addTop.bind(this));
      this.DOM.page2Btn.addEventListener("click",this._toggle.bind(this));
      this.DOM.page2Btn.addEventListener("click",this._addWorks.bind(this));
      this.DOM.page3Btn.addEventListener("click",this._toggle.bind(this));
      this.DOM.page3Btn.addEventListener("click",this._addProf.bind(this));
      this.DOM.page4Btn.addEventListener("click",this._toggle.bind(this));
      this.DOM.page4Btn.addEventListener("click",this._addSkill.bind(this));
      this.DOM.prfBtn.addEventListener("click",this._addProf.bind(this));
      this.DOM.backBtn.addEventListener("click",this._addTop.bind(this));
      this.DOM.backBtnWks.addEventListener("click",this._addTop.bind(this));
      this.DOM.wksBtn.addEventListener("click",this._addWorks.bind(this));
      this.DOM.skillBtn.addEventListener("click",this._addSkill.bind(this));
      this.DOM.backBtnSkill.addEventListener("click",this._addTop.bind(this));
  }
}

new LinkMenu();