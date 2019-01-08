export const webActions = {
  webActionMetadata: [
    {
      applicationInterceptors: [],
      dispatchMechanism: "GET",
      function:
        "fun misk.web.actions.InternalErrorAction.error(): kotlin.Nothing",
      functionAnnotations: [
        "@misk.web.Get(pathPattern=/error)",
        "@misk.security.authz.Unauthenticated()"
      ],
      name: "InternalErrorAction",
      networkInterceptors: [
        "misk.web.interceptors.InternalErrorInterceptorFactory$Companion$INTERCEPTOR$1",
        "misk.web.interceptors.RequestLogContextInterceptor",
        "misk.web.interceptors.RequestLoggingInterceptor",
        "misk.web.interceptors.MetricsInterceptor",
        "misk.web.interceptors.TracingInterceptor",
        "misk.web.exceptions.ExceptionHandlingInterceptor",
        "misk.web.interceptors.MarshallerInterceptor",
        "misk.web.interceptors.WideOpenDevelopmentInterceptor"
      ],
      parameterTypes: [],
      pathPattern: "/error",
      requestMediaTypes: ["*/*"],
      responseMediaType: "null",
      returnType: "kotlin.Nothing"
    },
    {
      applicationInterceptors: [],
      dispatchMechanism: "GET",
      function:
        "fun misk.web.actions.StatusAction.getStatus(): misk.web.actions.StatusAction.ServerStatus",
      functionAnnotations: [
        "@misk.web.Get(pathPattern=/_status)",
        "@misk.web.ResponseContentType(value=application/json;charset=utf-8)",
        "@misk.security.authz.Unauthenticated()"
      ],
      name: "StatusAction",
      networkInterceptors: [
        "misk.web.interceptors.InternalErrorInterceptorFactory$Companion$INTERCEPTOR$1",
        "misk.web.interceptors.RequestLogContextInterceptor",
        "misk.web.interceptors.RequestLoggingInterceptor",
        "misk.web.interceptors.MetricsInterceptor",
        "misk.web.interceptors.TracingInterceptor",
        "misk.web.exceptions.ExceptionHandlingInterceptor",
        "misk.web.interceptors.MarshallerInterceptor",
        "misk.web.interceptors.WideOpenDevelopmentInterceptor"
      ],
      parameterTypes: [],
      pathPattern: "/_status",
      requestMediaTypes: ["*/*"],
      responseMediaType: "application/json;charset=utf-8",
      returnType: "misk.web.actions.StatusAction.ServerStatus"
    },
    {
      applicationInterceptors: [],
      dispatchMechanism: "GET",
      function:
        "fun misk.web.actions.ReadinessCheckAction.readinessCheck(): misk.web.Response<kotlin.String>",
      functionAnnotations: [
        "@misk.web.Get(pathPattern=/_readiness)",
        "@misk.web.ResponseContentType(value=application/json;charset=utf-8)",
        "@misk.security.authz.Unauthenticated()"
      ],
      name: "ReadinessCheckAction",
      networkInterceptors: [
        "misk.web.interceptors.InternalErrorInterceptorFactory$Companion$INTERCEPTOR$1",
        "misk.web.interceptors.RequestLogContextInterceptor",
        "misk.web.interceptors.RequestLoggingInterceptor",
        "misk.web.interceptors.MetricsInterceptor",
        "misk.web.interceptors.TracingInterceptor",
        "misk.web.exceptions.ExceptionHandlingInterceptor",
        "misk.web.interceptors.MarshallerInterceptor",
        "misk.web.interceptors.WideOpenDevelopmentInterceptor"
      ],
      parameterTypes: [],
      pathPattern: "/_readiness",
      requestMediaTypes: ["*/*"],
      responseMediaType: "application/json;charset=utf-8",
      returnType: "misk.web.Response<kotlin.String>"
    },
    {
      applicationInterceptors: [],
      dispatchMechanism: "GET",
      function:
        "fun misk.web.actions.LivenessCheckAction.livenessCheck(): misk.web.Response<kotlin.String>",
      functionAnnotations: [
        "@misk.web.Get(pathPattern=/_liveness)",
        "@misk.web.ResponseContentType(value=text/plain;charset=utf-8)",
        "@misk.security.authz.Unauthenticated()"
      ],
      name: "LivenessCheckAction",
      networkInterceptors: [
        "misk.web.interceptors.InternalErrorInterceptorFactory$Companion$INTERCEPTOR$1",
        "misk.web.interceptors.RequestLogContextInterceptor",
        "misk.web.interceptors.RequestLoggingInterceptor",
        "misk.web.interceptors.MetricsInterceptor",
        "misk.web.interceptors.TracingInterceptor",
        "misk.web.exceptions.ExceptionHandlingInterceptor",
        "misk.web.interceptors.MarshallerInterceptor",
        "misk.web.interceptors.WideOpenDevelopmentInterceptor"
      ],
      parameterTypes: [],
      pathPattern: "/_liveness",
      requestMediaTypes: ["*/*"],
      responseMediaType: "text/plain;charset=utf-8",
      returnType: "misk.web.Response<kotlin.String>"
    },
    {
      applicationInterceptors: [],
      dispatchMechanism: "GET",
      function:
        "fun misk.web.actions.NotFoundAction.notFound(kotlin.String): misk.web.Response<misk.web.ResponseBody>",
      functionAnnotations: [
        "@misk.web.Get(pathPattern=/{path:.*})",
        "@misk.web.Post(pathPattern=/{path:.*})",
        "@misk.web.RequestContentType(value=[*/*])",
        "@misk.web.ResponseContentType(value=*/*)",
        "@misk.security.authz.Unauthenticated()"
      ],
      name: "NotFoundAction",
      networkInterceptors: [
        "misk.web.interceptors.InternalErrorInterceptorFactory$Companion$INTERCEPTOR$1",
        "misk.web.interceptors.RequestLogContextInterceptor",
        "misk.web.interceptors.RequestLoggingInterceptor",
        "misk.web.interceptors.MetricsInterceptor",
        "misk.web.interceptors.TracingInterceptor",
        "misk.web.exceptions.ExceptionHandlingInterceptor",
        "misk.web.interceptors.MarshallerInterceptor",
        "misk.web.interceptors.WideOpenDevelopmentInterceptor"
      ],
      parameterTypes: ["kotlin.String"],
      pathPattern: "/{path:.*}",
      requestMediaTypes: ["*/*"],
      responseMediaType: "*/*",
      returnType: "misk.web.Response<misk.web.ResponseBody>"
    },
    {
      applicationInterceptors: [],
      dispatchMechanism: "POST",
      function:
        "fun misk.web.actions.NotFoundAction.notFound(kotlin.String): misk.web.Response<misk.web.ResponseBody>",
      functionAnnotations: [
        "@misk.web.Get(pathPattern=/{path:.*})",
        "@misk.web.Post(pathPattern=/{path:.*})",
        "@misk.web.RequestContentType(value=[*/*])",
        "@misk.web.ResponseContentType(value=*/*)",
        "@misk.security.authz.Unauthenticated()"
      ],
      name: "NotFoundAction",
      networkInterceptors: [
        "misk.web.interceptors.InternalErrorInterceptorFactory$Companion$INTERCEPTOR$1",
        "misk.web.interceptors.RequestLogContextInterceptor",
        "misk.web.interceptors.RequestLoggingInterceptor",
        "misk.web.interceptors.MetricsInterceptor",
        "misk.web.interceptors.TracingInterceptor",
        "misk.web.exceptions.ExceptionHandlingInterceptor",
        "misk.web.interceptors.MarshallerInterceptor",
        "misk.web.interceptors.WideOpenDevelopmentInterceptor"
      ],
      parameterTypes: ["kotlin.String"],
      pathPattern: "/{path:.*}",
      requestMediaTypes: ["*/*"],
      responseMediaType: "*/*",
      returnType: "misk.web.Response<misk.web.ResponseBody>"
    },
    {
      applicationInterceptors: [],
      dispatchMechanism: "GET",
      function:
        "fun misk.web.actions.AdminDashboardTabAction.getAll(): misk.web.actions.AdminDashboardTabAction.Response",
      functionAnnotations: [
        "@misk.web.Get(pathPattern=/api/admindashboardtabs)",
        "@misk.web.RequestContentType(value=[application/json;charset=utf-8])",
        "@misk.web.ResponseContentType(value=application/json;charset=utf-8)",
        "@misk.security.authz.Unauthenticated()"
      ],
      name: "AdminDashboardTabAction",
      networkInterceptors: [
        "misk.web.interceptors.InternalErrorInterceptorFactory$Companion$INTERCEPTOR$1",
        "misk.web.interceptors.RequestLogContextInterceptor",
        "misk.web.interceptors.RequestLoggingInterceptor",
        "misk.web.interceptors.MetricsInterceptor",
        "misk.web.interceptors.TracingInterceptor",
        "misk.web.exceptions.ExceptionHandlingInterceptor",
        "misk.web.interceptors.MarshallerInterceptor",
        "misk.web.interceptors.WideOpenDevelopmentInterceptor"
      ],
      parameterTypes: [],
      pathPattern: "/api/admindashboardtabs",
      requestMediaTypes: ["application/json;charset=utf-8"],
      responseMediaType: "application/json;charset=utf-8",
      returnType: "misk.web.actions.AdminDashboardTabAction.Response"
    },
    {
      applicationInterceptors: [],
      dispatchMechanism: "GET",
      function:
        "fun misk.web.actions.ServiceMetadataAction.getAll(): misk.web.actions.ServiceMetadataAction.Response",
      functionAnnotations: [
        "@misk.web.Get(pathPattern=/api/service/metadata)",
        "@misk.web.RequestContentType(value=[application/json;charset=utf-8])",
        "@misk.web.ResponseContentType(value=application/json;charset=utf-8)",
        "@misk.security.authz.Unauthenticated()"
      ],
      name: "ServiceMetadataAction",
      networkInterceptors: [
        "misk.web.interceptors.InternalErrorInterceptorFactory$Companion$INTERCEPTOR$1",
        "misk.web.interceptors.RequestLogContextInterceptor",
        "misk.web.interceptors.RequestLoggingInterceptor",
        "misk.web.interceptors.MetricsInterceptor",
        "misk.web.interceptors.TracingInterceptor",
        "misk.web.exceptions.ExceptionHandlingInterceptor",
        "misk.web.interceptors.MarshallerInterceptor",
        "misk.web.interceptors.WideOpenDevelopmentInterceptor"
      ],
      parameterTypes: [],
      pathPattern: "/api/service/metadata",
      requestMediaTypes: ["application/json;charset=utf-8"],
      responseMediaType: "application/json;charset=utf-8",
      returnType: "misk.web.actions.ServiceMetadataAction.Response"
    },
    {
      applicationInterceptors: [],
      dispatchMechanism: "GET",
      function:
        "fun misk.web.proxy.WebProxyAction.action(): misk.web.Response<misk.web.ResponseBody>",
      functionAnnotations: [
        "@misk.web.Get(pathPattern=/{path:.*})",
        "@misk.web.Post(pathPattern=/{path:.*})",
        "@misk.web.RequestContentType(value=[*/*])",
        "@misk.web.ResponseContentType(value=*/*)",
        "@misk.security.authz.Unauthenticated()"
      ],
      name: "WebProxyAction",
      networkInterceptors: [
        "misk.web.interceptors.InternalErrorInterceptorFactory$Companion$INTERCEPTOR$1",
        "misk.web.interceptors.RequestLogContextInterceptor",
        "misk.web.interceptors.RequestLoggingInterceptor",
        "misk.web.interceptors.MetricsInterceptor",
        "misk.web.interceptors.TracingInterceptor",
        "misk.web.exceptions.ExceptionHandlingInterceptor",
        "misk.web.interceptors.MarshallerInterceptor",
        "misk.web.interceptors.WideOpenDevelopmentInterceptor"
      ],
      parameterTypes: [],
      pathPattern: "/_tab/loader/{path:.*}",
      requestMediaTypes: ["*/*"],
      responseMediaType: "*/*",
      returnType: "misk.web.Response<misk.web.ResponseBody>"
    },
    {
      applicationInterceptors: [],
      dispatchMechanism: "POST",
      function:
        "fun misk.web.proxy.WebProxyAction.action(): misk.web.Response<misk.web.ResponseBody>",
      functionAnnotations: [
        "@misk.web.Get(pathPattern=/{path:.*})",
        "@misk.web.Post(pathPattern=/{path:.*})",
        "@misk.web.RequestContentType(value=[*/*])",
        "@misk.web.ResponseContentType(value=*/*)",
        "@misk.security.authz.Unauthenticated()"
      ],
      name: "WebProxyAction",
      networkInterceptors: [
        "misk.web.interceptors.InternalErrorInterceptorFactory$Companion$INTERCEPTOR$1",
        "misk.web.interceptors.RequestLogContextInterceptor",
        "misk.web.interceptors.RequestLoggingInterceptor",
        "misk.web.interceptors.MetricsInterceptor",
        "misk.web.interceptors.TracingInterceptor",
        "misk.web.exceptions.ExceptionHandlingInterceptor",
        "misk.web.interceptors.MarshallerInterceptor",
        "misk.web.interceptors.WideOpenDevelopmentInterceptor"
      ],
      parameterTypes: [],
      pathPattern: "/_tab/loader/{path:.*}",
      requestMediaTypes: ["*/*"],
      responseMediaType: "*/*",
      returnType: "misk.web.Response<misk.web.ResponseBody>"
    },
    {
      applicationInterceptors: [],
      dispatchMechanism: "GET",
      function:
        "fun misk.web.proxy.WebProxyAction.action(): misk.web.Response<misk.web.ResponseBody>",
      functionAnnotations: [
        "@misk.web.Get(pathPattern=/{path:.*})",
        "@misk.web.Post(pathPattern=/{path:.*})",
        "@misk.web.RequestContentType(value=[*/*])",
        "@misk.web.ResponseContentType(value=*/*)",
        "@misk.security.authz.Unauthenticated()"
      ],
      name: "WebProxyAction",
      networkInterceptors: [
        "misk.web.interceptors.InternalErrorInterceptorFactory$Companion$INTERCEPTOR$1",
        "misk.web.interceptors.RequestLogContextInterceptor",
        "misk.web.interceptors.RequestLoggingInterceptor",
        "misk.web.interceptors.MetricsInterceptor",
        "misk.web.interceptors.TracingInterceptor",
        "misk.web.exceptions.ExceptionHandlingInterceptor",
        "misk.web.interceptors.MarshallerInterceptor",
        "misk.web.interceptors.WideOpenDevelopmentInterceptor"
      ],
      parameterTypes: [],
      pathPattern: "/_admin/{path:.*}",
      requestMediaTypes: ["*/*"],
      responseMediaType: "*/*",
      returnType: "misk.web.Response<misk.web.ResponseBody>"
    },
    {
      applicationInterceptors: [],
      dispatchMechanism: "POST",
      function:
        "fun misk.web.proxy.WebProxyAction.action(): misk.web.Response<misk.web.ResponseBody>",
      functionAnnotations: [
        "@misk.web.Get(pathPattern=/{path:.*})",
        "@misk.web.Post(pathPattern=/{path:.*})",
        "@misk.web.RequestContentType(value=[*/*])",
        "@misk.web.ResponseContentType(value=*/*)",
        "@misk.security.authz.Unauthenticated()"
      ],
      name: "WebProxyAction",
      networkInterceptors: [
        "misk.web.interceptors.InternalErrorInterceptorFactory$Companion$INTERCEPTOR$1",
        "misk.web.interceptors.RequestLogContextInterceptor",
        "misk.web.interceptors.RequestLoggingInterceptor",
        "misk.web.interceptors.MetricsInterceptor",
        "misk.web.interceptors.TracingInterceptor",
        "misk.web.exceptions.ExceptionHandlingInterceptor",
        "misk.web.interceptors.MarshallerInterceptor",
        "misk.web.interceptors.WideOpenDevelopmentInterceptor"
      ],
      parameterTypes: [],
      pathPattern: "/_admin/{path:.*}",
      requestMediaTypes: ["*/*"],
      responseMediaType: "*/*",
      returnType: "misk.web.Response<misk.web.ResponseBody>"
    },
    {
      applicationInterceptors: [],
      dispatchMechanism: "GET",
      function:
        "fun misk.web.proxy.WebProxyAction.action(): misk.web.Response<misk.web.ResponseBody>",
      functionAnnotations: [
        "@misk.web.Get(pathPattern=/{path:.*})",
        "@misk.web.Post(pathPattern=/{path:.*})",
        "@misk.web.RequestContentType(value=[*/*])",
        "@misk.web.ResponseContentType(value=*/*)",
        "@misk.security.authz.Unauthenticated()"
      ],
      name: "WebProxyAction",
      networkInterceptors: [
        "misk.web.interceptors.InternalErrorInterceptorFactory$Companion$INTERCEPTOR$1",
        "misk.web.interceptors.RequestLogContextInterceptor",
        "misk.web.interceptors.RequestLoggingInterceptor",
        "misk.web.interceptors.MetricsInterceptor",
        "misk.web.interceptors.TracingInterceptor",
        "misk.web.exceptions.ExceptionHandlingInterceptor",
        "misk.web.interceptors.MarshallerInterceptor",
        "misk.web.interceptors.WideOpenDevelopmentInterceptor"
      ],
      parameterTypes: [],
      pathPattern: "/@misk/{path:.*}",
      requestMediaTypes: ["*/*"],
      responseMediaType: "*/*",
      returnType: "misk.web.Response<misk.web.ResponseBody>"
    },
    {
      applicationInterceptors: [],
      dispatchMechanism: "POST",
      function:
        "fun misk.web.proxy.WebProxyAction.action(): misk.web.Response<misk.web.ResponseBody>",
      functionAnnotations: [
        "@misk.web.Get(pathPattern=/{path:.*})",
        "@misk.web.Post(pathPattern=/{path:.*})",
        "@misk.web.RequestContentType(value=[*/*])",
        "@misk.web.ResponseContentType(value=*/*)",
        "@misk.security.authz.Unauthenticated()"
      ],
      name: "WebProxyAction",
      networkInterceptors: [
        "misk.web.interceptors.InternalErrorInterceptorFactory$Companion$INTERCEPTOR$1",
        "misk.web.interceptors.RequestLogContextInterceptor",
        "misk.web.interceptors.RequestLoggingInterceptor",
        "misk.web.interceptors.MetricsInterceptor",
        "misk.web.interceptors.TracingInterceptor",
        "misk.web.exceptions.ExceptionHandlingInterceptor",
        "misk.web.interceptors.MarshallerInterceptor",
        "misk.web.interceptors.WideOpenDevelopmentInterceptor"
      ],
      parameterTypes: [],
      pathPattern: "/@misk/{path:.*}",
      requestMediaTypes: ["*/*"],
      responseMediaType: "*/*",
      returnType: "misk.web.Response<misk.web.ResponseBody>"
    },
    {
      applicationInterceptors: ["misk.security.authz.AccessInterceptor"],
      dispatchMechanism: "GET",
      function:
        "fun misk.config.ConfigAdminAction.getAll(): misk.config.ConfigAdminAction.Response",
      functionAnnotations: [
        "@misk.web.Get(pathPattern=/api/config/all)",
        "@misk.web.RequestContentType(value=[application/json;charset=utf-8])",
        "@misk.web.ResponseContentType(value=application/json;charset=utf-8)",
        "@misk.web.metadata.AdminDashboardAccess()"
      ],
      name: "ConfigAdminAction",
      networkInterceptors: [
        "misk.web.interceptors.InternalErrorInterceptorFactory$Companion$INTERCEPTOR$1",
        "misk.web.interceptors.RequestLogContextInterceptor",
        "misk.web.interceptors.RequestLoggingInterceptor",
        "misk.web.interceptors.MetricsInterceptor",
        "misk.web.interceptors.TracingInterceptor",
        "misk.web.exceptions.ExceptionHandlingInterceptor",
        "misk.web.interceptors.MarshallerInterceptor",
        "misk.web.interceptors.WideOpenDevelopmentInterceptor"
      ],
      parameterTypes: [],
      pathPattern: "/api/config/all",
      requestMediaTypes: ["application/json;charset=utf-8"],
      responseMediaType: "application/json;charset=utf-8",
      returnType: "misk.config.ConfigAdminAction.Response"
    },
    {
      applicationInterceptors: [],
      dispatchMechanism: "GET",
      function:
        "fun misk.web.proxy.WebProxyAction.action(): misk.web.Response<misk.web.ResponseBody>",
      functionAnnotations: [
        "@misk.web.Get(pathPattern=/{path:.*})",
        "@misk.web.Post(pathPattern=/{path:.*})",
        "@misk.web.RequestContentType(value=[*/*])",
        "@misk.web.ResponseContentType(value=*/*)",
        "@misk.security.authz.Unauthenticated()"
      ],
      name: "WebProxyAction",
      networkInterceptors: [
        "misk.web.interceptors.InternalErrorInterceptorFactory$Companion$INTERCEPTOR$1",
        "misk.web.interceptors.RequestLogContextInterceptor",
        "misk.web.interceptors.RequestLoggingInterceptor",
        "misk.web.interceptors.MetricsInterceptor",
        "misk.web.interceptors.TracingInterceptor",
        "misk.web.exceptions.ExceptionHandlingInterceptor",
        "misk.web.interceptors.MarshallerInterceptor",
        "misk.web.interceptors.WideOpenDevelopmentInterceptor"
      ],
      parameterTypes: [],
      pathPattern: "/_tab/config/{path:.*}",
      requestMediaTypes: ["*/*"],
      responseMediaType: "*/*",
      returnType: "misk.web.Response<misk.web.ResponseBody>"
    },
    {
      applicationInterceptors: [],
      dispatchMechanism: "POST",
      function:
        "fun misk.web.proxy.WebProxyAction.action(): misk.web.Response<misk.web.ResponseBody>",
      functionAnnotations: [
        "@misk.web.Get(pathPattern=/{path:.*})",
        "@misk.web.Post(pathPattern=/{path:.*})",
        "@misk.web.RequestContentType(value=[*/*])",
        "@misk.web.ResponseContentType(value=*/*)",
        "@misk.security.authz.Unauthenticated()"
      ],
      name: "WebProxyAction",
      networkInterceptors: [
        "misk.web.interceptors.InternalErrorInterceptorFactory$Companion$INTERCEPTOR$1",
        "misk.web.interceptors.RequestLogContextInterceptor",
        "misk.web.interceptors.RequestLoggingInterceptor",
        "misk.web.interceptors.MetricsInterceptor",
        "misk.web.interceptors.TracingInterceptor",
        "misk.web.exceptions.ExceptionHandlingInterceptor",
        "misk.web.interceptors.MarshallerInterceptor",
        "misk.web.interceptors.WideOpenDevelopmentInterceptor"
      ],
      parameterTypes: [],
      pathPattern: "/_tab/config/{path:.*}",
      requestMediaTypes: ["*/*"],
      responseMediaType: "*/*",
      returnType: "misk.web.Response<misk.web.ResponseBody>"
    },
    {
      applicationInterceptors: ["misk.security.authz.AccessInterceptor"],
      dispatchMechanism: "GET",
      function:
        "fun misk.web.actions.WebActionMetadataAction.getAll(): misk.web.actions.WebActionMetadataAction.Response",
      functionAnnotations: [
        "@misk.web.Get(pathPattern=/api/webactionmetadata)",
        "@misk.web.RequestContentType(value=[application/json;charset=utf-8])",
        "@misk.web.ResponseContentType(value=application/json;charset=utf-8)",
        "@misk.web.metadata.AdminDashboardAccess()"
      ],
      name: "WebActionMetadataAction",
      networkInterceptors: [
        "misk.web.interceptors.InternalErrorInterceptorFactory$Companion$INTERCEPTOR$1",
        "misk.web.interceptors.RequestLogContextInterceptor",
        "misk.web.interceptors.RequestLoggingInterceptor",
        "misk.web.interceptors.MetricsInterceptor",
        "misk.web.interceptors.TracingInterceptor",
        "misk.web.exceptions.ExceptionHandlingInterceptor",
        "misk.web.interceptors.MarshallerInterceptor",
        "misk.web.interceptors.WideOpenDevelopmentInterceptor"
      ],
      parameterTypes: [],
      pathPattern: "/api/webactionmetadata",
      requestMediaTypes: ["application/json;charset=utf-8"],
      responseMediaType: "application/json;charset=utf-8",
      returnType: "misk.web.actions.WebActionMetadataAction.Response"
    },
    {
      applicationInterceptors: [],
      dispatchMechanism: "GET",
      function:
        "fun misk.web.proxy.WebProxyAction.action(): misk.web.Response<misk.web.ResponseBody>",
      functionAnnotations: [
        "@misk.web.Get(pathPattern=/{path:.*})",
        "@misk.web.Post(pathPattern=/{path:.*})",
        "@misk.web.RequestContentType(value=[*/*])",
        "@misk.web.ResponseContentType(value=*/*)",
        "@misk.security.authz.Unauthenticated()"
      ],
      name: "WebProxyAction",
      networkInterceptors: [
        "misk.web.interceptors.InternalErrorInterceptorFactory$Companion$INTERCEPTOR$1",
        "misk.web.interceptors.RequestLogContextInterceptor",
        "misk.web.interceptors.RequestLoggingInterceptor",
        "misk.web.interceptors.MetricsInterceptor",
        "misk.web.interceptors.TracingInterceptor",
        "misk.web.exceptions.ExceptionHandlingInterceptor",
        "misk.web.interceptors.MarshallerInterceptor",
        "misk.web.interceptors.WideOpenDevelopmentInterceptor"
      ],
      parameterTypes: [],
      pathPattern: "/_tab/webactions/{path:.*}",
      requestMediaTypes: ["*/*"],
      responseMediaType: "*/*",
      returnType: "misk.web.Response<misk.web.ResponseBody>"
    },
    {
      applicationInterceptors: [],
      dispatchMechanism: "POST",
      function:
        "fun misk.web.proxy.WebProxyAction.action(): misk.web.Response<misk.web.ResponseBody>",
      functionAnnotations: [
        "@misk.web.Get(pathPattern=/{path:.*})",
        "@misk.web.Post(pathPattern=/{path:.*})",
        "@misk.web.RequestContentType(value=[*/*])",
        "@misk.web.ResponseContentType(value=*/*)",
        "@misk.security.authz.Unauthenticated()"
      ],
      name: "WebProxyAction",
      networkInterceptors: [
        "misk.web.interceptors.InternalErrorInterceptorFactory$Companion$INTERCEPTOR$1",
        "misk.web.interceptors.RequestLogContextInterceptor",
        "misk.web.interceptors.RequestLoggingInterceptor",
        "misk.web.interceptors.MetricsInterceptor",
        "misk.web.interceptors.TracingInterceptor",
        "misk.web.exceptions.ExceptionHandlingInterceptor",
        "misk.web.interceptors.MarshallerInterceptor",
        "misk.web.interceptors.WideOpenDevelopmentInterceptor"
      ],
      parameterTypes: [],
      pathPattern: "/_tab/webactions/{path:.*}",
      requestMediaTypes: ["*/*"],
      responseMediaType: "*/*",
      returnType: "misk.web.Response<misk.web.ResponseBody>"
    },
    {
      applicationInterceptors: ["misk.security.authz.AccessInterceptor"],
      dispatchMechanism: "GET",
      function:
        "fun com.squareup.cashurlshortener.actions.UrlTokenMetadataWebAction.getMetadata(): com.squareup.cashurlshortener.actions.UrlTokenMetadataWebAction.Response",
      functionAnnotations: [
        "@misk.web.Get(pathPattern=/api/urlshortener/metadata/)",
        "@misk.web.RequestContentType(value=[application/json;charset=utf-8])",
        "@misk.web.ResponseContentType(value=application/json;charset=utf-8)",
        "@com.squareup.cashurlshortener.service.CashUrlshortenerAdministratorAccess()"
      ],
      name: "UrlTokenMetadataWebAction",
      networkInterceptors: [
        "misk.web.interceptors.InternalErrorInterceptorFactory$Companion$INTERCEPTOR$1",
        "misk.web.interceptors.RequestLogContextInterceptor",
        "misk.web.interceptors.RequestLoggingInterceptor",
        "misk.web.interceptors.MetricsInterceptor",
        "misk.web.interceptors.TracingInterceptor",
        "misk.web.exceptions.ExceptionHandlingInterceptor",
        "misk.web.interceptors.MarshallerInterceptor",
        "misk.web.interceptors.WideOpenDevelopmentInterceptor"
      ],
      parameterTypes: [],
      pathPattern: "/api/urlshortener/metadata/",
      requestMediaTypes: ["application/json;charset=utf-8"],
      responseMediaType: "application/json;charset=utf-8",
      returnType:
        "com.squareup.cashurlshortener.actions.UrlTokenMetadataWebAction.Response"
    },
    {
      applicationInterceptors: [],
      dispatchMechanism: "GET",
      function:
        "fun misk.web.proxy.WebProxyAction.action(): misk.web.Response<misk.web.ResponseBody>",
      functionAnnotations: [
        "@misk.web.Get(pathPattern=/{path:.*})",
        "@misk.web.Post(pathPattern=/{path:.*})",
        "@misk.web.RequestContentType(value=[*/*])",
        "@misk.web.ResponseContentType(value=*/*)",
        "@misk.security.authz.Unauthenticated()"
      ],
      name: "WebProxyAction",
      networkInterceptors: [
        "misk.web.interceptors.InternalErrorInterceptorFactory$Companion$INTERCEPTOR$1",
        "misk.web.interceptors.RequestLogContextInterceptor",
        "misk.web.interceptors.RequestLoggingInterceptor",
        "misk.web.interceptors.MetricsInterceptor",
        "misk.web.interceptors.TracingInterceptor",
        "misk.web.exceptions.ExceptionHandlingInterceptor",
        "misk.web.interceptors.MarshallerInterceptor",
        "misk.web.interceptors.WideOpenDevelopmentInterceptor"
      ],
      parameterTypes: [],
      pathPattern: "/_tab/url-most-recent/{path:.*}",
      requestMediaTypes: ["*/*"],
      responseMediaType: "*/*",
      returnType: "misk.web.Response<misk.web.ResponseBody>"
    },
    {
      applicationInterceptors: [],
      dispatchMechanism: "POST",
      function:
        "fun misk.web.proxy.WebProxyAction.action(): misk.web.Response<misk.web.ResponseBody>",
      functionAnnotations: [
        "@misk.web.Get(pathPattern=/{path:.*})",
        "@misk.web.Post(pathPattern=/{path:.*})",
        "@misk.web.RequestContentType(value=[*/*])",
        "@misk.web.ResponseContentType(value=*/*)",
        "@misk.security.authz.Unauthenticated()"
      ],
      name: "WebProxyAction",
      networkInterceptors: [
        "misk.web.interceptors.InternalErrorInterceptorFactory$Companion$INTERCEPTOR$1",
        "misk.web.interceptors.RequestLogContextInterceptor",
        "misk.web.interceptors.RequestLoggingInterceptor",
        "misk.web.interceptors.MetricsInterceptor",
        "misk.web.interceptors.TracingInterceptor",
        "misk.web.exceptions.ExceptionHandlingInterceptor",
        "misk.web.interceptors.MarshallerInterceptor",
        "misk.web.interceptors.WideOpenDevelopmentInterceptor"
      ],
      parameterTypes: [],
      pathPattern: "/_tab/url-most-recent/{path:.*}",
      requestMediaTypes: ["*/*"],
      responseMediaType: "*/*",
      returnType: "misk.web.Response<misk.web.ResponseBody>"
    },
    {
      applicationInterceptors: [],
      dispatchMechanism: "GET",
      function:
        "fun misk.web.proxy.WebProxyAction.action(): misk.web.Response<misk.web.ResponseBody>",
      functionAnnotations: [
        "@misk.web.Get(pathPattern=/{path:.*})",
        "@misk.web.Post(pathPattern=/{path:.*})",
        "@misk.web.RequestContentType(value=[*/*])",
        "@misk.web.ResponseContentType(value=*/*)",
        "@misk.security.authz.Unauthenticated()"
      ],
      name: "WebProxyAction",
      networkInterceptors: [
        "misk.web.interceptors.InternalErrorInterceptorFactory$Companion$INTERCEPTOR$1",
        "misk.web.interceptors.RequestLogContextInterceptor",
        "misk.web.interceptors.RequestLoggingInterceptor",
        "misk.web.interceptors.MetricsInterceptor",
        "misk.web.interceptors.TracingInterceptor",
        "misk.web.exceptions.ExceptionHandlingInterceptor",
        "misk.web.interceptors.MarshallerInterceptor",
        "misk.web.interceptors.WideOpenDevelopmentInterceptor"
      ],
      parameterTypes: [],
      pathPattern: "/_tab/url-create-short/{path:.*}",
      requestMediaTypes: ["*/*"],
      responseMediaType: "*/*",
      returnType: "misk.web.Response<misk.web.ResponseBody>"
    },
    {
      applicationInterceptors: [],
      dispatchMechanism: "POST",
      function:
        "fun misk.web.proxy.WebProxyAction.action(): misk.web.Response<misk.web.ResponseBody>",
      functionAnnotations: [
        "@misk.web.Get(pathPattern=/{path:.*})",
        "@misk.web.Post(pathPattern=/{path:.*})",
        "@misk.web.RequestContentType(value=[*/*])",
        "@misk.web.ResponseContentType(value=*/*)",
        "@misk.security.authz.Unauthenticated()"
      ],
      name: "WebProxyAction",
      networkInterceptors: [
        "misk.web.interceptors.InternalErrorInterceptorFactory$Companion$INTERCEPTOR$1",
        "misk.web.interceptors.RequestLogContextInterceptor",
        "misk.web.interceptors.RequestLoggingInterceptor",
        "misk.web.interceptors.MetricsInterceptor",
        "misk.web.interceptors.TracingInterceptor",
        "misk.web.exceptions.ExceptionHandlingInterceptor",
        "misk.web.interceptors.MarshallerInterceptor",
        "misk.web.interceptors.WideOpenDevelopmentInterceptor"
      ],
      parameterTypes: [],
      pathPattern: "/_tab/url-create-short/{path:.*}",
      requestMediaTypes: ["*/*"],
      responseMediaType: "*/*",
      returnType: "misk.web.Response<misk.web.ResponseBody>"
    },
    {
      applicationInterceptors: ["misk.security.authz.AccessInterceptor"],
      dispatchMechanism: "POST",
      function:
        "fun com.squareup.cashurlshortener.actions.CreateShortUrlWebAction.createShortUrl(com.squareup.cashurlshortener.actions.CreateShortUrlWebAction.Request): com.squareup.cashurlshortener.actions.CreateShortUrlWebAction.Response",
      functionAnnotations: [
        "@misk.web.Post(pathPattern=/create)",
        "@misk.web.RequestContentType(value=[application/json;charset=utf-8])",
        "@misk.web.ResponseContentType(value=application/json;charset=utf-8)",
        "@com.squareup.cashurlshortener.service.CashUrlshortenerOperatorAccess()"
      ],
      name: "CreateShortUrlWebAction",
      networkInterceptors: [
        "misk.web.interceptors.InternalErrorInterceptorFactory$Companion$INTERCEPTOR$1",
        "misk.web.interceptors.RequestLogContextInterceptor",
        "misk.web.interceptors.RequestLoggingInterceptor",
        "misk.web.interceptors.MetricsInterceptor",
        "misk.web.interceptors.TracingInterceptor",
        "misk.web.exceptions.ExceptionHandlingInterceptor",
        "misk.web.interceptors.MarshallerInterceptor",
        "misk.web.interceptors.WideOpenDevelopmentInterceptor"
      ],
      parameterTypes: [
        "com.squareup.cashurlshortener.actions.CreateShortUrlWebAction.Request"
      ],
      pathPattern: "/create",
      requestMediaTypes: ["application/json;charset=utf-8"],
      responseMediaType: "application/json;charset=utf-8",
      returnType:
        "com.squareup.cashurlshortener.actions.CreateShortUrlWebAction.Response"
    },
    {
      applicationInterceptors: ["misk.security.authz.AccessInterceptor"],
      dispatchMechanism: "GET",
      function:
        "fun com.squareup.cashurlshortener.actions.ShortUrlWebAction.follow(kotlin.String): misk.web.Response<misk.web.ResponseBody>",
      functionAnnotations: [
        "@misk.web.Get(pathPattern=/{token:[^/_]+})",
        "@misk.web.ResponseContentType(value=application/json;charset=utf-8)",
        "@com.squareup.cashurlshortener.service.CashUrlshortenerOperatorAccess()"
      ],
      name: "ShortUrlWebAction",
      networkInterceptors: [
        "misk.web.interceptors.InternalErrorInterceptorFactory$Companion$INTERCEPTOR$1",
        "misk.web.interceptors.RequestLogContextInterceptor",
        "misk.web.interceptors.RequestLoggingInterceptor",
        "misk.web.interceptors.MetricsInterceptor",
        "misk.web.interceptors.TracingInterceptor",
        "misk.web.exceptions.ExceptionHandlingInterceptor",
        "misk.web.interceptors.MarshallerInterceptor",
        "misk.web.interceptors.WideOpenDevelopmentInterceptor"
      ],
      parameterTypes: ["kotlin.String"],
      pathPattern: "/{token:[^/_]+}",
      requestMediaTypes: ["*/*"],
      responseMediaType: "application/json;charset=utf-8",
      returnType: "misk.web.Response<misk.web.ResponseBody>"
    }
  ]
}
