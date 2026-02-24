const colorMap: Record<string, { text: string; gradientLine: string; checkIcon: string }> = {
  'claw-purple': {
    text: 'text-claw-purple',
    gradientLine: 'h-1 bg-gradient-to-r from-claw-purple to-transparent',
    checkIcon: 'w-4 h-4 text-claw-purple shrink-0',
  },
  'kube-blue': {
    text: 'text-kube-blue',
    gradientLine: 'h-1 bg-gradient-to-r from-kube-blue to-transparent',
    checkIcon: 'w-4 h-4 text-kube-blue shrink-0',
  },
  'claw-cyan': {
    text: 'text-claw-cyan',
    gradientLine: 'h-1 bg-gradient-to-r from-claw-cyan to-transparent',
    checkIcon: 'w-4 h-4 text-claw-cyan shrink-0',
  },
  'claw-orange': {
    text: 'text-claw-orange',
    gradientLine: 'h-1 bg-gradient-to-r from-claw-orange to-transparent',
    checkIcon: 'w-4 h-4 text-claw-orange shrink-0',
  },
  'claw-green': {
    text: 'text-claw-green',
    gradientLine: 'h-1 bg-gradient-to-r from-claw-green to-transparent',
    checkIcon: 'w-4 h-4 text-claw-green shrink-0',
  },
  'primary': {
    text: 'text-primary',
    gradientLine: 'h-1 bg-gradient-to-r from-primary to-transparent',
    checkIcon: 'w-4 h-4 text-primary shrink-0',
  },
}

const features = [
  {
    title: 'Isolated Skill Sidecars',
    subtitle: 'A game-changer',
    description:
      'Every skill runs in its own sidecar container — a separate, isolated process injected into the agent pod at runtime. Toggle a skill on, and the controller automatically injects a dedicated sidecar, provisions ephemeral least-privilege RBAC, shares a /workspace volume, and garbage-collects everything when the run finishes.',
    highlights: [
      'Dedicated sidecar container per skill',
      'Ephemeral, least-privilege RBAC per run',
      'Shared /workspace volume coordination',
      'Automatic cleanup — containers, roles, bindings',
    ],
    color: 'claw-purple',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
      </svg>
    ),
  },
  {
    title: 'Multi-Channel Agents',
    subtitle: 'Talk to your cluster',
    description:
      'Connect agents to Telegram, Slack, Discord, or WhatsApp. Each channel runs as a dedicated Deployment — messages flow through NATS JetStream, not brittle in-process event emitters. Your agents are always reachable.',
    highlights: [
      'Telegram, Slack, Discord, WhatsApp',
      'Dedicated Deployment per channel',
      'NATS JetStream durable pub/sub',
      'Group chat & DM support',
    ],
    color: 'kube-blue',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
  },
  {
    title: 'Persistent Memory',
    subtitle: 'Agents that remember',
    description:
      'Each ClawInstance gets a ConfigMap-backed persistent memory (MEMORY.md). Mounted read-only into every agent pod, prepended as context, and automatically updated after each run. Memory lives in etcd — no external databases, fully declarative.',
    highlights: [
      'ConfigMap-backed MEMORY.md',
      'Auto-updated after each run',
      'Injected as agent context',
      'Lives in etcd alongside cluster state',
    ],
    color: 'claw-cyan',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125v-3.75" />
      </svg>
    ),
  },
  {
    title: 'Scheduled Heartbeats',
    subtitle: 'Proactive automation',
    description:
      'ClawSchedule CRDs define cron-based recurring agent runs — the Kubernetes-native equivalent of heartbeat systems. Concurrency policies (Forbid, Allow, Replace) work like CronJob — a natural extension of K8s semantics.',
    highlights: [
      'Cron-based recurring runs',
      'Built-in concurrency controls',
      'Memory injection per schedule',
      'CronJob-style semantics',
    ],
    color: 'claw-orange',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'k9s-Style TUI',
    subtitle: 'Interactive cluster management',
    description:
      'A full-featured terminal UI for agentic management. Browse instances, runs, schedules, channels, and skills. View logs, describe resources, submit agent runs with /run, check memory — all from your terminal.',
    highlights: [
      '7 resource views with live updates',
      'Inline logs & describe output',
      'Slash commands (/run, /schedule)',
      'Keyboard-driven workflow',
    ],
    color: 'claw-green',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    title: 'Any AI Provider',
    subtitle: 'Model agnostic',
    description:
      'OpenAI, Anthropic, Azure OpenAI, Ollama, or any OpenAI-compatible endpoint. Configure per instance — no vendor lock-in. Run local models for full data sovereignty.',
    highlights: [
      'OpenAI, Anthropic, Azure, Ollama',
      'Any OpenAI-compatible endpoint',
      'Per-instance provider config',
      'Full data sovereignty with local models',
    ],
    color: 'primary',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      {/* Background decoration */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-claw-purple/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-kube-blue/10 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary-light text-sm font-medium mb-4">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
            </svg>
            Powerful Features
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Everything you need for
            <br />
            <span className="bg-gradient-to-r from-primary to-claw-cyan bg-clip-text text-transparent">
              production-grade agentic AI
            </span>
          </h2>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group relative rounded-2xl bg-surface-light/30 border border-white/5 hover:border-white/15 transition-all duration-500 overflow-hidden"
            >
              {/* Top gradient line */}
              <div className={colorMap[feature.color].gradientLine} />
              
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className={colorMap[feature.color].text}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{feature.title}</h3>
                    <p className={`text-sm ${colorMap[feature.color].text}`}>{feature.subtitle}</p>
                  </div>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {feature.description}
                </p>

                <ul className="space-y-2">
                  {feature.highlights.map((highlight, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-slate-300">
                      <svg className={colorMap[feature.color].checkIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
