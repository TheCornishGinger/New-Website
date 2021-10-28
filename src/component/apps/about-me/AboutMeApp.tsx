import "./aboutMeApp.scss";

let css = "aboutMeApp ";

export function AboutMeApp() {
  return (
    <>
      <div className={css + "wrap"}>
        <div className="margin-auto">
          <h1 className="text large" style={{ marginBottom: "20px" }}>
            A short story
          </h1>
          <div className="text medium" style={{ maxWidth: "800px" }}>
            <div className="note-box">
              <span className="note-text red">NOTE </span>
              <span className="note-text">
                This is some painful raw text right now, I will be back later to
                convert it to some beautiful animated story or something, maybe I'll
                even do some epic voiceover. <span>(hang in there!)</span>
              </span>
            </div>
            <span>
              It's mid October 2020, my best friend's just married so I have more
              time on my hands. Shortly before the wedding I had once again taken up
              game design for the 1000th time, and started work making a 2D horror
              game using the defold game engine.
              <div className="gap" />
              After spending a while getting the bare bones working, I began to
              struggle with implementing features I really wanted. After getting
              advice from a friend I realised it's time to switch over to something
              with more tutorials (so I can get more help).
              <div className="gap" />
              The thought of starting all over again was too much to handle at the
              time so I turned my attention to my website, I wanted a cool place to
              host the games. My old website hadn't been touched in a long time,
              needless to say it didn't look great.
              <div className="gap" />
              Time for a makeover! I poured a couple hours into it (because I'm
              particular), and was super pleased with the results.
              <div className="gap" />
              BUT THEN, being the excited man I was, I sent it to my friend only to
              get LAUGHED AT BECAUSE IT HAD A WIX BANNER ON IT. *cries in drag and
              drop*
              <div className="gap" />
              It suddenly dawned on me, that if I couldn't code a website HOW WOULD I
              CODE A WHOLE GAME...
              <div className="gap" />
              And with that I got to work... And then had to restart, because
              reasons...
              <div className="gap" />
              Anddd after more resarts (and a lot of help) we reach this website,
              version 3! iTs sO mUcH cOoLeR!!!
            </span>
            <p className="text small">Created by Levi Wrigley.</p>
          </div>
        </div>
      </div>
    </>
  );
}
