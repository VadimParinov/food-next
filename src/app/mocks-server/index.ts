const initMocksServer = async () => {
  if (typeof window === 'undefined') {
    const { server } = await import('./server')
    server.listen()
  } else {
    const { worker } = await import('./browser')
    await worker.start({
      waitUntilReady: true,
      onUnhandledRequest: 'bypass',
    })
  }
}

export default initMocksServer()
