export interface MultitenancyConfig {
  /**
   * The connection name to reach the tenant database
   *
   * Set to `null` to use the default connection
   */
  tenantDatabaseConnectionName: string | null;

  /**
   * The connection name to reach the lanlord database
   */
  lanlordDatabaseConnectionName: string | null;

  /**
   * This key will be used to associate the current tenant in the context
   */
  currentTenantContextKey: string;

  /**
   * This key will be used to bind the current tenant in the container
   */
  currentTenantContainerKey: string;
}
