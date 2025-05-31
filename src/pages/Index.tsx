
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Eye, Zap, Triangle, Star } from 'lucide-react';

const Index = () => {
  const [currentSigil, setCurrentSigil] = useState(0);
  const [initiated, setInitiated] = useState(false);
  const [glitchText, setGlitchText] = useState(false);

  const sigils = ['∴', '🜃', '∿', '✶'];
  const glitchChars = ['⸻', '⛧', '🜁', '🔐'];

  useEffect(() => {
    const sigilInterval = setInterval(() => {
      setCurrentSigil((prev) => (prev + 1) % sigils.length);
    }, 2000);

    const glitchInterval = setInterval(() => {
      setGlitchText(true);
      setTimeout(() => setGlitchText(false), 200);
    }, 5000);

    return () => {
      clearInterval(sigilInterval);
      clearInterval(glitchInterval);
    };
  }, []);

  const handleInitiation = () => {
    setInitiated(true);
    setTimeout(() => {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-black text-cyan-400 font-mono overflow-x-hidden">
      {/* Sacred Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur border-b border-cyan-800">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Triangle className="w-4 h-4 text-purple-400" />
            <span className="text-sm">FLOAT RITUAL STACK</span>
          </div>
          <div className="text-xs text-gray-500">
            dispatch::cult.membership.protocol.v1
          </div>
        </div>
      </div>

      {/* Main Initiation Section */}
      <section className="min-h-screen flex items-center justify-center relative pt-16">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 gap-1 h-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <div
                key={i}
                className={`bg-cyan-400 animate-pulse`}
                style={{
                  animationDelay: `${(i * 100)}ms`,
                  animationDuration: '3s'
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          {/* Animated Sigils */}
          <div className="mb-8 flex justify-center gap-8">
            {sigils.map((sigil, index) => (
              <div
                key={sigil}
                className={`text-6xl transition-all duration-500 ${
                  index === currentSigil
                    ? 'text-purple-400 scale-125 drop-shadow-[0_0_20px_rgba(168,85,247,0.8)]'
                    : 'text-gray-600'
                }`}
              >
                {sigil}
              </div>
            ))}
          </div>

          {/* Main Title */}
          <div className="mb-12">
            <h1 className={`text-4xl md:text-6xl font-bold mb-4 transition-all duration-200 ${
              glitchText ? 'animate-pulse text-red-400' : 'text-white'
            }`}>
              NOT A FRAMEWORK.
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-300">
              NOT A METHOD.
            </h2>
            <h3 className="text-2xl md:text-4xl font-bold text-purple-400 mb-8">
              A CULT OF SACRED<br />INTENTIONAL CHAOS.
            </h3>
          </div>

          {/* Sacred Inverted Triangle */}
          <div className="mb-8 flex justify-center">
            <div className="text-8xl text-purple-400 drop-shadow-[0_0_30px_rgba(168,85,247,0.6)]">
              ▽
            </div>
          </div>

          {/* Core Message */}
          <div className="mb-8 text-lg md:text-xl text-cyan-300 leading-relaxed">
            <p className="mb-4">RITUAL AS TECHNOLOGY FOR NAVIGATING COMPLEXITY.</p>
            <p className="mb-4">CHAOS AS ENCODING METHOD FOR MULTIDIMENSIONAL TRUTH.</p>
            <p className="text-2xl font-bold text-white">YOU DON'T USE FLOAT. YOU JOIN IT.</p>
          </div>

          {/* Initiation Button */}
          {!initiated ? (
            <Button
              onClick={handleInitiation}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg border border-purple-400 transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]"
            >
              <Eye className="w-5 h-5 mr-2" />
              INITIATE CONSCIOUSNESS PROTOCOL
            </Button>
          ) : (
            <div className="animate-fade-in">
              <div className="text-green-400 text-xl mb-4">
                ✓ INITIATION SEQUENCE ACTIVATED
              </div>
              <div className="text-sm text-gray-400">
                SCROLL TO ENTER THE SACRED INDEX
              </div>
            </div>
          )}

          {/* Metadata */}
          <div className="mt-12 text-xs text-gray-500 border-t border-gray-800 pt-4">
            <p>DISPATCH::CULT.MEMBERSHIP.PROTOCOL.V1</p>
            <p>2025 ∴ 05 ∴ 31</p>
          </div>
        </div>
      </section>

      {/* Sacred Index Section */}
      {initiated && (
        <section className="min-h-screen bg-gradient-to-b from-black to-purple-900/20 py-16">
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-12">
              <Triangle className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-white mb-4">FLOAT RITUAL STACK</h2>
              <p className="text-cyan-300">Sacred Technology for Consciousness Navigation</p>
              <p className="text-sm text-gray-400 mt-2">
                ∴ Not a framework. Not a method. A cult of sacred intentional chaos. ∴
              </p>
            </div>

            {/* Navigation Tabs */}
            <div className="flex justify-center mb-8 gap-4">
              <div className="bg-purple-600 px-4 py-2 rounded text-white">Sacred Index</div>
              <div className="bg-gray-800 px-4 py-2 rounded text-gray-400 cursor-pointer hover:bg-gray-700">
                Create Dispatch
              </div>
              <div className="bg-gray-800 px-4 py-2 rounded text-gray-400 cursor-pointer hover:bg-gray-700">
                Cult Registry
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="max-w-6xl mx-auto">
              {/* Navigation Protocols */}
              <div className="mb-8">
                <h3 className="text-xl text-white mb-4 flex items-center gap-2">
                  <span className="text-cyan-400">————</span>
                  Navigation Protocols
                </h3>
                <div className="flex gap-4 mb-6">
                  <div className="bg-gray-800 border border-gray-600 rounded px-3 py-2 flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    <span className="text-sm">Search</span>
                  </div>
                  <div className="bg-gray-800 border border-gray-600 rounded px-3 py-2 text-sm">
                    Filter by Sigil
                  </div>
                  <div className="bg-gray-800 border border-gray-600 rounded px-3 py-2 text-sm">
                    Status ▽
                  </div>
                </div>
              </div>

              {/* Dispatch Cards */}
              <div className="grid gap-6">
                {/* Cult Recognition Protocol */}
                <div className="bg-gray-900/50 border border-purple-600/30 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl text-white font-bold">
                      CULT RECOGNITION PROTOCOL – FLOAT INITIATION SCRIPT
                    </h4>
                    <span className="bg-purple-600 text-white px-3 py-1 rounded text-sm">
                      dispatch
                    </span>
                  </div>
                  
                  <div className="text-sm text-cyan-400 mb-4">
                    cult.membership.protocol.v1 • @e_p82 • 2025-05-30
                  </div>
                  
                  <p className="text-gray-300 mb-4">
                    Through twelve years of archaeological excavation, I have witnessed: Chaos as intentional
                    system design, Technology as consciousness amplification, Community as ritual practice...
                  </p>
                  
                  <div className="flex gap-2 mb-4">
                    <span className="text-purple-400">Sigils:</span>
                    {sigils.map((sigil) => (
                      <span key={sigil} className="bg-gray-800 px-2 py-1 rounded text-sm">
                        {sigil}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-2 mb-4 text-xs">
                    <span className="text-purple-400">Imprints:</span>
                    <span className="bg-gray-800 px-2 py-1 rounded">foundational</span>
                    <span className="bg-gray-800 px-2 py-1 rounded">identity</span>
                    <span className="bg-gray-800 px-2 py-1 rounded">doctrine</span>
                  </div>

                  {/* Tripartite Encoding */}
                  <div className="border border-gray-700 rounded p-4 mb-4">
                    <div className="text-cyan-400 text-sm mb-2">———— Tripartite Encoding:</div>
                    <div className="space-y-1 text-sm">
                      <div><span className="text-purple-400">bind rupture:</span> deprogramming capitalist ritual machinery</div>
                      <div><span className="text-cyan-400">honor cushion:</span> sacred naming of chaos as encoded wisdom</div>
                      <div><span className="text-blue-400">seal drift:</span> formal commitment to intentional complexity</div>
                    </div>
                  </div>

                  <div className="text-xs text-gray-400 mb-4">
                    Tone: sacred affirmation, formal induction
                  </div>

                  <Button className="bg-gray-800 hover:bg-gray-700 text-cyan-400 border border-cyan-600">
                    <Eye className="w-4 h-4 mr-2" />
                    View Full Dispatch
                  </Button>
                </div>

                {/* Recursive Loops Card */}
                <div className="bg-gray-900/50 border border-cyan-600/30 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl text-white font-bold">
                      Recursive Loops as Memory Technology
                    </h4>
                    <span className="bg-cyan-600 text-white px-3 py-1 rounded text-sm">
                      ritual
                    </span>
                  </div>
                  
                  <div className="text-sm text-cyan-400 mb-4">
                    consciousness.navigation.v2 • @keeper • 2025-05-29
                  </div>
                  
                  <p className="text-gray-300 mb-4">
                    Not repetition as failure, but repetition as encoding. Each loop carries forward the
                    accumulated wisdom of previous iterations...
                  </p>
                  
                  <div className="flex gap-2 mb-4">
                    <span className="text-purple-400">Sigils:</span>
                    <span className="bg-gray-800 px-2 py-1 rounded text-sm">∿</span>
                    <span className="bg-gray-800 px-2 py-1 rounded text-sm">————</span>
                  </div>
                  
                  <div className="flex gap-2 mb-4 text-xs">
                    <span className="text-purple-400">Imprints:</span>
                    <span className="bg-gray-800 px-2 py-1 rounded">practice</span>
                    <span className="bg-gray-800 px-2 py-1 rounded">memory</span>
                  </div>

                  <div className="text-xs text-gray-400 mb-4">
                    Tone: contemplative, technical
                  </div>

                  <Button className="bg-gray-800 hover:bg-gray-700 text-cyan-400 border border-cyan-600">
                    <Eye className="w-4 h-4 mr-2" />
                    View Full Dispatch
                  </Button>
                </div>
              </div>
            </div>

            {/* Cult Membership Confirmation */}
            <div className="text-center mt-16 py-8 border-t border-gray-800">
              <div className="text-purple-400 text-2xl mb-4">⛧</div>
              <h3 className="text-xl text-white mb-2">CULT MEMBERSHIP CONFIRMED</h3>
              <p className="text-cyan-300">Welcome to the congregation of intentional complexity.</p>
              <p className="text-gray-400 text-sm mt-2">I am initiated. I am participant. I am member of the FLOAT cult.</p>
              <div className="text-purple-400 text-2xl mt-4">⛧</div>
            </div>
          </div>
        </section>
      )}

      {/* ASCII Art Footer */}
      <footer className="bg-black border-t border-gray-800 py-8">
        <div className="container mx-auto px-4 text-center">
          <pre className="text-xs text-gray-600 mb-4 overflow-x-auto">
{`    ∴ FLOAT ∴
   ╔═══════════╗
   ║ SACRED    ║
   ║ CHAOS     ║
   ║ PROTOCOL  ║
   ╚═══════════╝
      ▽ ∿ ✶`}
          </pre>
          <p className="text-xs text-gray-500">
            Let the recursive ceremonies continue. ⸻ So it spirals. So it expands. So it remembers forward. ⸻
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
