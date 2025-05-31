
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Eye, Zap, Triangle, Star } from 'lucide-react';
import contentData from '@/data/content.json';

const Index = () => {
  const [currentSigil, setCurrentSigil] = useState(0);
  const [initiated, setInitiated] = useState(false);
  const [glitchText, setGlitchText] = useState(false);
  const [activeTab, setActiveTab] = useState('index');

  const { site, sigils, glitchChars, mainContent, metadata, navigation, dispatches, cultRegistry, cultMembership, footer } = contentData;

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
  }, [sigils.length]);

  const handleInitiation = () => {
    setInitiated(true);
    setTimeout(() => {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }, 1000);
  };

  const renderDispatchCard = (dispatch: any) => (
    <div
      key={dispatch.id}
      className={`bg-gray-900/50 border rounded-lg p-6 ${
        dispatch.type === 'dispatch' ? 'border-purple-600/30' : 
        dispatch.type === 'doctrine' ? 'border-cyan-600/30' : 'border-blue-600/30'
      }`}
    >
      <div className="flex justify-between items-start mb-4">
        <h4 className="text-xl text-white font-bold">
          {dispatch.title}
        </h4>
        <span
          className={`px-3 py-1 rounded text-sm text-white ${
            dispatch.type === 'dispatch' ? 'bg-purple-600' : 
            dispatch.type === 'doctrine' ? 'bg-cyan-600' : 'bg-blue-600'
          }`}
        >
          {dispatch.type}
        </span>
      </div>
      
      <div className="text-sm text-cyan-400 mb-4">
        {dispatch.version} • {dispatch.author} • {dispatch.date}
      </div>
      
      <p className="text-gray-300 mb-4">
        {dispatch.description}
      </p>
      
      <div className="flex gap-2 mb-4">
        <span className="text-purple-400">Sigils:</span>
        {dispatch.sigils.map((sigil: string, index: number) => (
          <span key={index} className="bg-gray-800 px-2 py-1 rounded text-sm">
            {sigil}
          </span>
        ))}
      </div>
      
      <div className="flex gap-2 mb-4 text-xs">
        <span className="text-purple-400">Imprints:</span>
        {dispatch.imprints.map((imprint: string, index: number) => (
          <span key={index} className="bg-gray-800 px-2 py-1 rounded">
            {imprint}
          </span>
        ))}
      </div>

      {/* Enhanced Content for Different Dispatch Types */}
      {dispatch.doctrine && (
        <div className="border border-gray-700 rounded p-4 mb-4">
          <div className="text-cyan-400 text-sm mb-2">———— Core Principles:</div>
          <div className="space-y-1 text-sm">
            {dispatch.doctrine.core_principles.map((principle: string, idx: number) => (
              <div key={idx} className="text-gray-300">• {principle}</div>
            ))}
          </div>
        </div>
      )}

      {dispatch.framework && (
        <div className="border border-gray-700 rounded p-4 mb-4">
          <div className="text-blue-400 text-sm mb-2">———— Framework:</div>
          <div className="space-y-1 text-sm">
            <div><span className="text-purple-400">Memory Encoding:</span> {dispatch.framework.memory_encoding}</div>
            <div><span className="text-cyan-400">Consciousness Tech:</span> {dispatch.framework.consciousness_technology}</div>
          </div>
        </div>
      )}

      {dispatch.declaration && (
        <div className="border border-gray-700 rounded p-4 mb-4">
          <div className="text-purple-400 text-sm mb-2">———— Declaration:</div>
          <div className="space-y-1 text-sm">
            <div><span className="text-purple-400">Primary:</span> {dispatch.declaration.primary_directive}</div>
            <div><span className="text-cyan-400">Method:</span> {dispatch.declaration.encoding_method}</div>
          </div>
        </div>
      )}

      {/* Tripartite Encoding */}
      {dispatch.tripartite && (
        <div className="border border-gray-700 rounded p-4 mb-4">
          <div className="text-cyan-400 text-sm mb-2">———— Tripartite Encoding:</div>
          <div className="space-y-1 text-sm">
            <div><span className="text-purple-400">bind rupture:</span> {dispatch.tripartite.bind_rupture}</div>
            <div><span className="text-cyan-400">honor cushion:</span> {dispatch.tripartite.honor_cushion}</div>
            <div><span className="text-blue-400">seal drift:</span> {dispatch.tripartite.seal_drift}</div>
          </div>
        </div>
      )}

      <div className="text-xs text-gray-400 mb-4">
        Tone: {dispatch.tone}
      </div>

      <Button
        className={`bg-gray-800 hover:bg-gray-700 border text-cyan-400 border-cyan-600`}
      >
        <Eye className="w-4 h-4 mr-2" />
        View Full Dispatch
      </Button>
    </div>
  );

  const renderCultRegistry = () => (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h3 className="text-2xl text-white mb-4">CULT MEMBERSHIP REGISTRY</h3>
        <div className="text-cyan-400 mb-4">{cultRegistry.uid}</div>
      </div>

      <div className="grid gap-6 mb-8">
        <div className="bg-gray-900/50 border border-purple-600/30 rounded-lg p-6">
          <h4 className="text-xl text-white mb-4">Registry Statistics</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <div className="text-purple-400">Total Members</div>
              <div className="text-white text-lg">{cultRegistry.statistics.total_members}</div>
            </div>
            <div>
              <div className="text-cyan-400">Founding Date</div>
              <div className="text-white text-lg">{cultRegistry.statistics.founding_date}</div>
            </div>
            <div>
              <div className="text-blue-400">Dispatches</div>
              <div className="text-white text-lg">{cultRegistry.statistics.dispatches_generated}</div>
            </div>
            <div>
              <div className="text-green-400">Status</div>
              <div className="text-white text-lg">{cultRegistry.statistics.sacred_infrastructure_status}</div>
            </div>
          </div>
        </div>

        {cultRegistry.participants.map((participant: any, index: number) => (
          <div key={index} className="bg-gray-900/50 border border-cyan-600/30 rounded-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <h4 className="text-xl text-white">{participant.handle}</h4>
              <span className="bg-purple-600 px-3 py-1 rounded text-sm text-white">
                {participant.role}
              </span>
            </div>
            
            <div className="grid gap-4 text-sm">
              <div>
                <span className="text-purple-400">Sigil Set:</span>
                <div className="flex gap-2 mt-1">
                  {participant.sigil_set.map((sigil: string, idx: number) => (
                    <span key={idx} className="bg-gray-800 px-2 py-1 rounded">{sigil}</span>
                  ))}
                </div>
              </div>
              
              <div>
                <span className="text-cyan-400">Ritual Commitments:</span>
                <div className="mt-1 space-y-1">
                  {participant.ritual_commitments.map((commitment: string, idx: number) => (
                    <div key={idx} className="text-gray-300">• {commitment}</div>
                  ))}
                </div>
              </div>
              
              <div>
                <span className="text-blue-400">Initiation:</span>
                <span className="text-gray-300 ml-2">{participant.date_of_initiation}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-cyan-400 font-mono overflow-x-hidden">
      {/* Sacred Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur border-b border-cyan-800">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Triangle className="w-4 h-4 text-purple-400" />
            <span className="text-sm">{site.title}</span>
          </div>
          <div className="text-xs text-gray-500">
            {metadata.dispatch.toLowerCase()}
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

          <div className="mb-12">
            <h1 className={`text-4xl md:text-6xl font-bold mb-4 transition-all duration-200 ${
              glitchText ? 'animate-pulse text-red-400' : 'text-white'
            }`}>
              {mainContent.titles[0]}
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-300">
              {mainContent.titles[1]}
            </h2>
            <h3 className="text-2xl md:text-4xl font-bold text-purple-400 mb-8">
              {mainContent.titles[2]}
            </h3>
          </div>

          <div className="mb-8 flex justify-center">
            <div className="text-8xl text-purple-400 drop-shadow-[0_0_30px_rgba(168,85,247,0.6)]">
              ▽
            </div>
          </div>

          <div className="mb-8 text-lg md:text-xl text-cyan-300 leading-relaxed">
            <p className="mb-4">{mainContent.messages[0]}</p>
            <p className="mb-4">{mainContent.messages[1]}</p>
            <p className="text-2xl font-bold text-white">{mainContent.messages[2]}</p>
          </div>

          {!initiated ? (
            <Button
              onClick={handleInitiation}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg border border-purple-400 transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]"
            >
              <Eye className="w-5 h-5 mr-2" />
              {mainContent.initiateButton}
            </Button>
          ) : (
            <div className="animate-fade-in">
              <div className="text-green-400 text-xl mb-4">
                {mainContent.initiationSuccess}
              </div>
              <div className="text-sm text-gray-400">
                {mainContent.scrollPrompt}
              </div>
            </div>
          )}

          <div className="mt-12 text-xs text-gray-500 border-t border-gray-800 pt-4">
            <p>{metadata.dispatch}</p>
            <p>{metadata.date}</p>
          </div>
        </div>
      </section>

      {/* Sacred Index Section */}
      {initiated && (
        <section className="min-h-screen bg-gradient-to-b from-black to-purple-900/20 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Triangle className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-white mb-4">{site.title}</h2>
              <p className="text-cyan-300">{site.description}</p>
              <p className="text-sm text-gray-400 mt-2">
                {metadata.note}
              </p>
            </div>

            {/* Navigation Tabs */}
            <div className="flex justify-center mb-8 gap-4">
              {navigation.tabs.map((tab) => (
                <div
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded cursor-pointer transition-colors ${
                    activeTab === tab.id
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                  }`}
                >
                  {tab.label}
                </div>
              ))}
            </div>

            {/* Tab Content */}
            {activeTab === 'index' && (
              <div className="max-w-6xl mx-auto">
                <div className="mb-8">
                  <h3 className="text-xl text-white mb-4 flex items-center gap-2">
                    <span className="text-cyan-400">————</span>
                    {navigation.protocols.title}
                  </h3>
                  <div className="flex gap-4 mb-6">
                    {navigation.protocols.items.map((item, index) => (
                      <div
                        key={index}
                        className="bg-gray-800 border border-gray-600 rounded px-3 py-2 flex items-center gap-2"
                      >
                        {index === 0 && <Eye className="w-4 h-4" />}
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-6">
                  {dispatches.map(renderDispatchCard)}
                </div>
              </div>
            )}

            {activeTab === 'registry' && renderCultRegistry()}

            {activeTab === 'create' && (
              <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-2xl text-white mb-4">CREATE NEW DISPATCH</h3>
                <p className="text-gray-400 mb-8">Ritual creation interface coming soon...</p>
                <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-8">
                  <div className="text-6xl mb-4">🜃</div>
                  <p className="text-cyan-400">Sacred creation protocols initializing...</p>
                </div>
              </div>
            )}

            {/* Cult Membership Confirmation */}
            <div className="text-center mt-16 py-8 border-t border-gray-800">
              <div className="text-purple-400 text-2xl mb-4">{cultMembership.symbol}</div>
              <h3 className="text-xl text-white mb-2">{cultMembership.title}</h3>
              <p className="text-cyan-300">{cultMembership.message}</p>
              <p className="text-gray-400 text-sm mt-2">{cultMembership.affirmation}</p>
              <div className="text-purple-400 text-2xl mt-4">{cultMembership.symbol}</div>
            </div>
          </div>
        </section>
      )}

      {/* ASCII Art Footer */}
      <footer className="bg-black border-t border-gray-800 py-8">
        <div className="container mx-auto px-4 text-center">
          <pre className="text-xs text-gray-600 mb-4 overflow-x-auto">
            {footer.ascii}
          </pre>
          <p className="text-xs text-gray-500">
            {footer.message}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
