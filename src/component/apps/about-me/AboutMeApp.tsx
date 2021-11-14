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
              It's mid October 2020, my best friends just married so I have more time
              on my hands. Shortly before the wedding I had once again taken up game
              design for the 1000th time, and started work on a 2D horror game using
              the defold game engine.
              <div className="gap" />
              After spending a while getting the bare bones working, I began to
              struggle with implementing features I really wanted. I got some advice
              and decided it was time to switch over to something with more tutorials
              and support.
              <div className="gap" />
              The thought of starting all over again was a bit much at the time, so I
              turned my attention to a website. I wanted a cool place to host the
              games, but my old site hadn't been touched in a long time and needless
              to say it didn't look great.
              <div className="gap" />
              Time for a makeover! I poured hours into adjusting each bit until I was
              happy with it, and was super pleased with the results.
              <div className="gap" />
              But then, being the excited man I was, I sent it to my friend only to
              get LAUGHED AT because it had.. a wix banner on it... *cries in drag
              and drop*
              <div className="gap" />
              It suddenly dawned on me, if I couldn't code a website, how would i
              code a freaking game...
              <div className="gap" />
              With that I got to work. After one restart, and then another, and some
              bugs here and there we are finally here!
              <div className="gap" />
              So now you wasted your time on my story I'll reward you with some
              advice. If you have a goal, like making a website, don't give even even
              if you have to start all over again! There are many great discord
              servers and stack overflow pages with information ready for your
              taking!
            </span>
            <p className="text small">
              Thank you for reading, website by Levi Wrigley.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
