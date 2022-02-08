import React from "react";
import Collapsible from "../elements/Collapsable";
import "./components.css";

function FAQ() {
  return (
    <div className="faq">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-12">
            <div className="page-top">
              <h1 className="page-headers">Frequently Asked Questions</h1>
              <p className="page-descriptions">
                This is a list of questions I've been asked recently!
              </p>
            </div>

            <div class="row">
              <div class="col-sm-6">
                <h2>School</h2>
                <h3>UBC</h3>
                {/* <Collapsible
                  q="What did you have to do in your UBC Sauder application?"
                  // a={text}
                  a=""
                /> */}
                <Collapsible
                  q="Tips for the Sauder application?"
                  a="1. Talk about the things you are passionate about-not what you think they want to hear.
                  2. Pick your vocabulary wisely. Showcase your accomplishments without being condescending or flashy.
                  3. Get it edited by people in your life + read it out loud.
                  4. If you stumble during the interview, that's okay. Just make sure you keep going. Avoid freezing."
                />
                <Collapsible
                  q="What do you think made you stand out on your UBC application?"
                  a="I’m not a UBC Admissions Officer, so take this all with a grain of salt. These are just my personal thoughts!

                  So here’s the thing, the UBC application (along with personal profile applications at some other post-secondaries) only allows you to talk about MAX 5 activities you have in your life. Activities include anything from sports to clubs to taking care of your little siblings after school. They do not need to be stereotypical volunteer positions.
                  
                  Because I only had 5 spots, it didn’t matter how many extracurriculars (ECs) I had. UBC would never know.
                  
                  Before assessing my written application, I believe admissions most likely looked at my grade point average FIRST to see if it passed a certain grade threshold.
                  
                  What I think made my application stand out is the way I talked about my top 5 ECs. I would like to think they look for passion, and how you can take your passions and develop them at the educational institution you’re applying for. The school wants to know how you can and will contribute to its community and reputation.
                  
                  TLDR: spend your time doing the extracurriculars you’re truly passionate about/want to explore more—EC quality > quantity."
                />
                <Collapsible
                  q="How did you apply for both business and computer science at UBC?"
                  a="I'm in the Business and Computer Science (BUCS) combined major at UBC!

                  To apply for this program, you need to apply to the BCom (business) program at the UBC Sauder School of Business.
                  
                  After receiving an offer to the BCom program at UBC, students can apply for the BUS Program. Up to now, the BUCS application is 250 words about why you want to join the program.
                  
                  There's 75 spots in the program each year!"
                />
                {/* <Collapsible
                  q="Why is BUCS a cheat code?"
                  a="This is an answer"
                /> */}
                <Collapsible
                  q="Tips for the BUCS application?"
                  a="At the time of writing, there is only one written response required for the BUCS application.

                  You only have 250 words, so make it count. The question is 'Why do you want to be in the BUCS program?'
                  
                  Really think about why you want to be in BUCS specifically. Consider your life goals/past experiences and how being in the BUCS program will help you achieve those goals.
                  
                  Show them that you did your research on the program and what exactly it entails and how it will help you get to where you want to be
                  
                  Make sure to mention the word 'BUCS' in your actual written application.
                  
                  Don't talk about how [insert fam member] wants you to do it I/ you're only in it for the money and job prospects. Simple, but lots of students ignore this."
                />
                <Collapsible
                  q="Would you recommend living on campus?"
                  a="When I had classes in person, yes! I was living on campus full-time! Now that I am on co-op (working remotely at the moment) and UBC is online (i.e. not a lot of people are on campus), I stay on campus occasionally when I need to!

                  I'd say it was definitely worth it for me personally! It was extremely convenient living so close to my classes (3-10 minutes) because my
                  commute would've been an 1.5 hrs each way otherwise—also get motion sickness in transit lol. My social life was also extremely lively last term since it was easier to bump into friends and spend more time with them on campus.
                  
                  Financially speaking, if it is breaking the bank, I would not recommend living here, especially if you land a residence that is not necessarily what you'd like to live in. If you live close by to campus, I would definitely not recommend living here because you are so close. It's easier to spend time with friends when you live on campus, but it's not
                  impossible if you live off campus.
                  
                  I'd say use your discretion and talk to your parent(s)/guardian(s)."
                />
                <h3>High School</h3>
                <Collapsible
                  q="What courses did you take in grade 11 and 12?"
                  a="GRADE 11: Accounting 11, Law 12, French 11, Programming 11, English 11 (New Media), Pre-Calc 12, Peer tutoring, Digital Media 11. 
                  GRADE 12: Physical Geography 12 (not by choice), AP Psych 12 (did not take exam lol), Peer tutoring, English 12, Chemistry 12 (I took Chem 11 in Gr.10, which is why you don't see it), Economics 12, Study block, Calculus 12."
                />
                {/* <Collapsible
                  q="What were your extracurriculars in high school?"
                  a="This is an answer"
                /> */}
                <Collapsible
                  q="Should I take calculus 12?"
                  a=" would 110% recommend taking calculus in high
                  school if you're pursuing a post-secondary major that has a calculus requirement (i.e. science, engineering, business, etc.) EVEN IF it screws over your average—WAY better than failing post-secondary calculus and PAYING to take it again."
                />
                {/* <Collapsible
                  q="Tips for English essays?"
                  a="This is an answer"
                />
                <Collapsible q="Note-taking Tips?" a="This is an answer" /> */}
                <h2>Career</h2>
                <Collapsible
                  q="Tips for individual interviews?"
                  a="Arrive early. Look presentable. Be enthusiastic. Demonstrate that you want to be there and make a good impression.

                  Do research on the organization beforehand and integrate the knowledge you picked up in your responses.
                  
                  Reflect on your past experiences and think about how you can talk about experiences that demonstrate your key qualities—what questions might they ask you and how will you respond?
                  
                  The most important thing is to communicate WHY you want to be involved with the initiative/organization. WHY them? This is while enthusiasm and a nice smile work wonders.
                  
                  Be attentive to the things the interviewer(s) say. Be prepared to ask them questions at the end. This is your opportunity to show them that you were listening and also learn more about if you actually want to be involved with them.
                  
                  Thank them! If you want to top it off, send them a thank you email to indicate you value their time.
                  
                  Send a followup thank you email the same day!"
                />
              </div>
              <div class="col-sm-6">
                <h2>Extracurriculars</h2>
                <h3>Shad</h3>
                <Collapsible
                  q="What Shad campus did you go to?"
                  a="Shad York 2019! Very fun time :”)"
                />
                <Collapsible
                  q="How many Shads did you have at your campus?"
                  a="56! I was #55."
                />
                <Collapsible
                  q="What did you do in Shad?"
                  a="Shad is actually a really hard experience to explain, but here are the fundamentals:

                  Shad is an enrichment program that focuses on STEAM (science, technology, engineering, arts, math), entrepreneurship, and social responsibility with the intentions of giving participants the skills they need to be leaders in their own community.
                  
                  They do this by (pre-COVID) shipping you off to one of their 19 university partners in a different province (I went to Toronto, Ontario), and you live on campus with 40-70 other high-achieving gr. 10/11s from across Canada.
                  
                  On top of world-class lectures, workshops, labs, and industry field trips, you get to network with daily guest speakers, which include profs, CEOs, and other cool people. There's also an opportunity to design
                  your own business venture in a team.
                  
                  Though the best part of Shad are all the other activities: exploring the campus, social/rec activities, camping, sporting events, movies, tours, sports, games, trips downtown, beach time, talent show, etc.
                  
                  Honestly you get a variety of STEM + business so not entirely engineering heavy, but it also depends on your host campus' specialties."
                />
                <h3>YELL</h3>
                <Collapsible
                  q="Is YELL worth the time and money?"
                  a="I participated in YELL at a time when they did not require tuition, but I can say that it was definitely one of the most, if not THE MOST worthwhile experience I have ever had (top 2 for sure)

                  YELL was the beginning of my extracurricular journey and it was when I started to really develop as a person I grew confident in—my soft skills, my business knowledge, and my confidence all got kickstarted in the program.
                  
                  YELL introduced me to so many people and opportunities. My mentor from YELL is now my mentor for life. She got me a job and brought me onto the Vancouver Startup Week team. I met the founder of YHY through YELL, and I joined the YHY team during the program. I met lifelong friends who I love and attend Sauder with. I’ve been approached by my YELL peers to launch entrepreneurial endeavours, and I was introduced to the world of case competitions by my teammmates. I got to pitch in front of 40 ADULT judges at once (which was a big deal as a former shy kid) in a fancy building in Downtown Vancouver for the final YELL Venture Challenge, and I got to pitch again at Vancouver’s Microsoft office for the BC Chamber of Commerce to Consul Generals from around the world!
                  
                  Some of this is definitely luck, but I am so so so grateful for YELL, and I continue to receive crazy opportunities as a YELL ambassador. Would definitely go back and pay if I got the chance because I got to takeawat such a big part of my life from YELL."
                />
                <Collapsible
                  q="How much time do I need to spend on YELL (weekly)?"
                  a="My team was extra and we probably spent an upwards of 6-30 hours each, depending on the week, but it definitely paid off in the end."
                />

                <h2>Personal Development</h2>
                {/* <h3>Habits</h3> */}
                <Collapsible
                  q="What tools do you manage your time?"
                  a="Notion: A web app where I organize my WHOLE life (unlimited storage yay), goals, priorities, and assignments. It’s pretty thorough, and I’m constantly adding to it!!

                  Sticky Notes: I prefer writing down and crossing out my daily tasks because the Notion can get overwhelming for one day.
                  
                  Google Calendar: Even though I know what tasks I have to do in a day, I’ll schedule when I’m donna do these tasks and how long I have to do them—!! otherwise the perfectionist comes out and I’ll spend unnecessary hours on a task. Some people don’t need a calendar but I totally do to remember everything. Sometimes I use the task feature here too for deadlines."
                />
                <Collapsible
                  q="How do you manage your time?"
                  a="Make a list of all the priorities in your life (school, work, EC #1, EC #2, friends, etc.) and order them somewhere. The next time you have to make a decision about where to spend your time, look at that list to remind yourself of what is most worth your time in that moment. Remember, priorities will always change."
                />
                <Collapsible
                  q="How do you stay motivated to do school work?"
                  a="1. It's very hard to be motivated every single day of your life. Most people need breaks. Some more than others and that's okay. It's important to recognize when you're not feeling it and take the day(s) off to regain your fire so you don't burn out.
                  2. If you set priorities and goals that you can constantly be reminded of (ex. written down on something you see every day), it might motivate you to stay on the grind, but it also may not.
                  3. If you're interested (or find a way to be interested) in what you're learning, it's a lot easier to want to do the homework. Sometimes you're not interested whatsoever. Ask yourself why you're taking the class? Is it a requirement for post secondary? Do you want to boost your grades? Are you in it for the vibes? If you can, use
                  that as motivation.
                  4. Sometimes I have too much on my plate to be bothered, so l just do it sooner than later because I don't want to do it later-be kind to your future self <3
                  5. There is no secret and automatic formula to motivation!! Everyone is different and you have to discover what works for you. This may mean enduring really boring classes and pushing through seemingly necessary homework. Struggling to stay on the grind is what makes it the grind. That's how you build character and grit (which are application/interview-worthy stories). Your experiences in school don't necessarily teach you content you'll remember for life, but they will teach you how you navigate life and all its problems."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;

// let text = document.write("Hello World!<br/>This is my string");
