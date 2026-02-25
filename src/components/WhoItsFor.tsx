const personas = [
  {
    role: 'SRE On-Call',
    skills: ['k8s-ops', 'incident-response'],
    description:
      'Always-on agent that monitors cluster health, triages incidents, and performs rollbacks — every 30 minutes.',
    tasks: [
      'Why is checkout-service crash-looping?',
      'Roll back payments-api to the previous version',
      'Top 5 resource-hungry pods across the cluster',
    ],
    color: 'from-claw-orange to-claw-red',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
      </svg>
    ),
  },
  {
    role: 'Security Auditor',
    skills: ['code-review', 'k8s-ops'],
    description:
      'Daily scans for privilege escalation, hardcoded secrets, missing NetworkPolicies — under a restrictive policy that blocks before it breaks.',
    tasks: [
      'Which ServiceAccounts have cluster-admin?',
      'Any deployments using :latest tags?',
      'Check Helm values for hardcoded secrets',
    ],
    color: 'from-claw-green to-claw-cyan',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    role: 'DevOps / Platform Eng',
    skills: ['k8s-ops', 'code-review'],
    description:
      'General-purpose agent for day-to-day ops — scaling, namespace provisioning, rollout history, node drains — running permissive on dev clusters.',
    tasks: [
      'Scale frontend to 5 replicas in staging',
      'Create namespace feature-xyz with LimitRange',
      'Drain worker-3 without violating PDBs',
    ],
    color: 'from-kube-blue to-claw-purple',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17l-5.384 3.181 1.028-5.993L2.114 7.63l6.016-.874L11.42 1.5l2.692 5.256 6.016.874-4.95 4.728 1.028 5.993z" />
      </svg>
    ),
  },
]

export default function WhoItsFor() {
  return (
    <section id="who" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-claw-purple/10 border border-claw-purple/20 text-claw-purple text-sm font-medium mb-4">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
            </svg>
            Who It's For
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Run agents for your cluster.
            <br />
            <span className="bg-gradient-to-r from-claw-orange to-claw-purple bg-clip-text text-transparent">
              Serve agents to your users.
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            <span className="text-white font-medium">Cluster operators</span> deploy purpose-built agent personas — SRE, security, platform eng — each with its own skills, policy, and heartbeat.
            <span className="text-claw-orange font-medium">Platform teams</span> use Sympozium to host agentic workloads that other teams and end-users interact with through Slack, Telegram, Discord, or API — with full tenant isolation, RBAC, and audit trails baked in.
          </p>
        </div>

        {/* Persona cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {personas.map((persona, i) => (
            <div
              key={i}
              className="group relative rounded-2xl bg-surface-light/50 border border-white/5 hover:border-white/10 transition-all duration-500 hover:-translate-y-1 overflow-hidden"
            >
              {/* Hover glow */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${persona.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

              {/* Header */}
              <div className="p-8 pb-0">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${persona.color} p-[1px] mb-5`}>
                  <div className="w-full h-full rounded-xl bg-surface-light flex items-center justify-center text-white">
                    {persona.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{persona.role}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {persona.skills.map((skill) => (
                    <span key={skill} className="text-xs font-mono px-2 py-0.5 rounded-md bg-white/5 text-slate-400 border border-white/5">
                      {skill}
                    </span>
                  ))}
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{persona.description}</p>
              </div>

              {/* Example tasks */}
              <div className="p-8 pt-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">Example tasks</p>
                <div className="space-y-2">
                  {persona.tasks.map((task, j) => (
                    <div key={j} className="flex items-start gap-2 text-sm text-slate-300">
                      <span className="text-claw-orange mt-0.5 shrink-0">&#x276F;</span>
                      <span className="font-mono text-xs leading-relaxed">{task}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Two callout panels */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Fleet operator callout */}
          <div className="relative rounded-2xl border border-white/5 bg-surface-light/30 p-8 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-claw-purple/5 via-transparent to-transparent" />
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-claw-purple to-claw-orange p-[1px] mb-5">
                <div className="w-full h-full rounded-xl bg-surface-light flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9m10.5-6v4.5m0-4.5h-4.5m4.5 0L15 9m-10.5 6v4.5m0-4.5h4.5m-4.5 0L9 15m10.5 6v-4.5m0 4.5h-4.5m4.5 0L15 15" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Fleet operator</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Each persona is a <span className="text-white font-medium">SympoziumInstance</span> — deploy dozens across namespaces, clusters, or environments.
                Manage your agent fleet the same way you manage any workload:{' '}
                <span className="font-mono text-claw-cyan text-xs">kubectl</span>,{' '}
                <span className="font-mono text-claw-cyan text-xs">GitOps</span>,{' '}
                <span className="font-mono text-claw-cyan text-xs">Helm</span>.
              </p>
            </div>
          </div>

          {/* Agentic workload manager callout */}
          <div className="relative rounded-2xl border border-white/5 bg-surface-light/30 p-8 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-kube-blue/5 via-transparent to-transparent" />
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-kube-blue to-claw-cyan p-[1px] mb-5">
                <div className="w-full h-full rounded-xl bg-surface-light flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Agentic workload manager</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Host agents that <span className="text-white font-medium">other people consume</span> — via Slack, Telegram, Discord, WhatsApp, or API.
                Each agent runs in its own pod with tenant isolation, scoped RBAC, and channel bindings.
                Your users interact with the agents. You control the blast radius.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
