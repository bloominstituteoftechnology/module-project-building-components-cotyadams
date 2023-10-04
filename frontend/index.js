function moduleProject3() {

  // 👉 TASK 1 - Write a `buildNav` component that returns a nav

  function buildNav(links) {
    //  ✨ do your magic here
    let nav = document.createElement('nav');
    links.forEach(link => {
      let { href, textContent, title } = link;
      let anchor = document.createElement('a');
      anchor.href = href;
      anchor.textContent = textContent;
      anchor.title = title;
      nav.appendChild(anchor)
    });
    return nav;
  }

  // ❗ DOM creation using your `buildNav` component (do not change):
  document.querySelector('header').appendChild(buildNav([
    { href: 'https://www.example.com', textContent: 'Home', title: 'Go to the home page' },
    { href: 'https://www.example.com/about', textContent: 'About', title: 'Learn more about our company' },
    { href: 'https://www.example.com/services', textContent: 'Services', title: 'View our available services' },
    { href: 'https://www.example.com/blog', textContent: 'Blog', title: 'Read our latest blog posts' },
    { href: 'https://www.example.com/contact', textContent: 'Contact', title: 'Get in touch with us' },
  ]))

  // 👉 TASK 2A - Write a `buildLearnerCard` component that returns a card
  function languageFinder(languages, id) {
    for (let language of languages) {
      if (language.id == id) {
        return language.name;
      }
    }
  }
  function buildLearnerCard(learners, languages) {
    //  ✨ do your magic here
    let container = document.createElement('div');
    let learnerId = document.createElement('p');
    let learnerName = document.createElement('p');
    let learnerDOB = document.createElement('p');
    let learnerFavLang = document.createElement('p');

    
    
    container.textContent
  learnerId.textContent = `learner id: ${learners.id}`;
  learnerName.textContent = `learner name: ${learners.fullName}`;
    learnerDOB.textContent = `learner DOB: ${learners.dateOfBirth}`;
    let languageName = languageFinder(languages, learners.favLanguage)
    learnerFavLang.textContent = `learner favorite language: ${languageName}`;
    
    container.classList.add('learner-card');
    learnerName.style.width = '90rem';
    container.appendChild(learnerName);
  container.appendChild(learnerId);
  container.appendChild(learnerDOB);
    container.appendChild(learnerFavLang);
    
    container.addEventListener('click', () => {
      document.querySelectorAll('.learner-card').forEach( card => {
        card.classList.remove('active')
      })
      container.classList.add('active');
     })
  return container;
  }
  

  {
    // 👉 TASK 2B - Use the two variables below to make learner Cards, and put them in the DOM

    let languages = [
      { id: 37, name: 'JavaScript', creator: 'Brendan Eich', year: 1995 },
      { id: 82, name: 'Python', creator: 'Guido van Rossum', year: 1991 },
      { id: 12, name: 'Java', creator: 'James Gosling', year: 1995 },
      { id: 53, name: 'C#', creator: 'Microsoft Corporation', year: 2000 },
      { id: 91, name: 'Ruby', creator: 'Yukihiro Matsumoto', year: 1995 }
    ]
    let learners = [
      { id: 24, fullName: 'Kenneth Fisher', dateOfBirth: '1990-01-01', favLanguage: 82 },
      { id: 53, fullName: 'Jess Williams', dateOfBirth: '1985-05-10', favLanguage: 37 },
      { id: 72, fullName: 'Brandon Nguyen', dateOfBirth: '1992-09-15', favLanguage: 53 },
      { id: 41, fullName: 'Sabah Beydoun', dateOfBirth: '1988-03-25', favLanguage: 91 },
      { id: 17, fullName: 'Daniel Castillo', dateOfBirth: '1995-11-05', favLanguage: 12 }
    ]
    //  ✨ do your magic here
    
    
    learners.forEach((learner) => {
    let learnerCard = buildLearnerCard(learner, languages);
    document.querySelector('section').appendChild(learnerCard)
  });
  }
  
  // 👉 TASK 3 - Write a `buildFooter` component that returns a footer

  function buildFooter(footerData) {
    //  ✨ do your magic here
    let footer = document.createElement('footer');
    let info = document.createElement('div');
    let companyName = document.createElement('p');
    let address = document.createElement('p');
    let email = document.createElement('p');
    let socialMedia = document.createElement('div');
    for (let platform in footerData.socialMedia) {
      let socialMediaLink = document.createElement('a');
      socialMediaLink.href = footerData.socialMedia[platform];
      socialMediaLink.textContent = platform.charAt(0).toUpperCase() + platform.slice(1)
      socialMedia.appendChild(socialMediaLink)
    }

    companyName.classList.add('company-name')
    address.classList.add('address')
    email.classList.add('contact-email')
    socialMedia.classList.add('social-media')
    
    email.innerHTML = `Email: <a href="mailto:${footerData.contactEmail}">${footerData.contactEmail}</a>`;
    companyName.textContent = footerData.companyName;
    address.textContent = footerData.address;


  info.appendChild(companyName);
  info.appendChild(address);
  info.appendChild(email);
  
    

    let copywrite = document.createElement('p');
    copywrite.textContent = '© BLOOM INSTITUTE OF TECHNOLOGY 2023'

    info.style.textAlign = 'center';
    socialMedia.style.textAlign = 'center';
    footer.appendChild(info);
    footer.appendChild(socialMedia);
    footer.appendChild(copywrite)
    return footer;
  }

  // ❗ DOM creation using your `buildFooter` component (do not change):
  document.body.appendChild(buildFooter({
    companyName: 'Bloom Institute of Technology',
    address: '123 Main Street, City, Country',
    contactEmail: 'info@example.com',
    socialMedia: {
      twitter: 'https://twitter.com/example',
      facebook: 'https://www.facebook.com/example',
      instagram: 'https://www.instagram.com/example',
    },
  }))

  // 👉 TASK 4 - Clicking on the section should deactivate the active card
    /*let container = document.querySelector('.container')
  container.addEventListener('click', () => {
    document.querySelector('hidden-on').classList.toggle('hidden-on')
  })*/

  //  ✨ do your magic here
}

// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject3 }
else moduleProject3()
